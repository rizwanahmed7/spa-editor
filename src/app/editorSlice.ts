import { ShapeType } from "./../components/Shapes/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "./geometry";

export interface Shape {
  id: number;
  type: "trinagle" | "square" | "hexagon";
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface EditorState {
  activeTool: "select" | "move" | "closestPoints";
  shapes: ShapeType[];
  closestPoint: { shapeId: number; point: Point } | null;
  selection: Shape[];
}

const initialState: EditorState = {
  activeTool: "select",
  shapes: [],
  closestPoint: null,
  selection: [],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<ShapeType>) => {
      state.shapes.push(action.payload);
    },
    setActiveTool: (
      state,
      action: PayloadAction<EditorState["activeTool"]>
    ) => {
      state.activeTool = action.payload;
    },
    updateShape: (
      state,
      action: PayloadAction<{ id: string; shape: ShapeType }>
    ) => {
      const index = state.shapes.findIndex(
        (shape) => shape.id === action.payload.id
      );
      if (index !== -1) {
        state.shapes[index] = action.payload.shape;
      }
    },
    deleteShape: (state, action: PayloadAction<string>) => {
      state.shapes = state.shapes.filter(
        (shape) => typeof shape.id !== action.payload
      );
    },
  },
});

export const { addShape, setActiveTool, updateShape } = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
