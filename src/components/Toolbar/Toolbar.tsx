import { ActiveTool } from "./../Shapes/types";
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTool } from "../../app/editorSlice";
import { ShapeType } from "../Shapes/types";
import uuid from "react-uuid";
import "./toolbar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

export const Toolbar = () => {
  const dispatch = useDispatch();
  const { activeTool } = useSelector((state: RootState) => state.editor);

  const handleToolClick = (tool: "select" | "move" | "closestPoints") => {
    dispatch(setActiveTool(tool));
  };

  const ParseElement = (element: string) => {
    const Shape_obj: ShapeType = {
      id: uuid(),
      type: element,
      isSelected: false,
      width: 150,
      height: 150,
      x: 0,
      y: 0,
    };
    return Shape_obj;
  };

  const Shapes = ["rectangle", "square", "hexagon"];

  const DragStarted = (
    e: React.DragEvent<HTMLButtonElement>,
    element: string
  ) => {
    e.dataTransfer.setData("elements", JSON.stringify(ParseElement(element)));
  };

  return (
    <div>
      <div className="tool-buttons">
        <button
          className={activeTool === "select" ? "button active" : "button"}
          onClick={() => handleToolClick("select")}
        >
          <FontAwesomeIcon icon={faMousePointer} />
        </button>
        <button
          className={activeTool === "move" ? "button active" : "button"}
          onClick={() => handleToolClick("move")}
        >
          <FontAwesomeIcon icon={faArrowsAlt} />
        </button>
        <button
          className={
            activeTool === "closestPoints" ? "button active" : "button"
          }
          onClick={() => handleToolClick("closestPoints")}
        >
          <FontAwesomeIcon icon={faArrowsAltH} />
        </button>
      </div>
      <div className="shape-buttons">
        {Shapes.map((shape) => {
          return (
            <button
              className="button"
              onDragStart={(e) => DragStarted(e, shape)}
              draggable={activeTool === "select"}
            >
              {shape}
            </button>
          );
        })}
      </div>
    </div>
  );
};
