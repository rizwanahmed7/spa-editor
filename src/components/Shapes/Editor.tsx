import React from "react";
import { useDispatch } from "react-redux";
import { addShape, updateShape } from "../../app/editorSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ShapeType } from "./types";

function Rectangle(props: ShapeType) {
    const { activeTool } = useSelector((state: RootState) => state.editor);
    const { id, x, y, height, width } = props

    const handleClick = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('selected', JSON.stringify({ id: id }))
    }
    return <div style={{ position: 'absolute', left: x, top: y, width: width, height: height, backgroundColor: 'red' }} onDragStart={handleClick} draggable={activeTool === "move"}></div>;
}

function Circle(props: ShapeType) {
    const { activeTool } = useSelector((state: RootState) => state.editor);
    const { id, x, y, height, width } = props

    const handleClick = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('selected', JSON.stringify({ id: id }))
    }
    return <div style={{ position: 'absolute', left: x - width / 2, top: y - height / 2, width: width, height: height, borderRadius: '50%', backgroundColor: 'green' }} onDragStart={handleClick} draggable={activeTool === "move"}></div>;
}

function Triangle(props: ShapeType) {
    const { activeTool } = useSelector((state: RootState) => state.editor);
    const { id, x, y, height, width } = props

    const handleClick = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('selected', JSON.stringify({ id: id }))
    }
    return (
        <div style={{ position: 'absolute', left: x, top: y, width: 0, height: 0, borderLeft: `${width / 2}px solid transparent`, borderRight: `${width / 2}px solid transparent`, borderBottom: `${height}px solid blue` }} onDragStart={handleClick} draggable={activeTool === "move"}></div>
    );
}

export const Editor = () => {
    const dispatch = useDispatch();
    const { shapes, activeTool } = useSelector((state: RootState) => state.editor);

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => { e.preventDefault() }
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        if (activeTool === 'move') {
            let selected = JSON.parse(e.dataTransfer.getData('selected'))
            let currentShape = shapes.find((shape) => { return shape.id === selected.id }) as ShapeType
            currentShape = { ...currentShape, x: e.pageX, y: e.pageY }
            dispatch(updateShape({ id: selected.id, shape: currentShape as ShapeType }))
        }
        if (activeTool === 'select') {
            let transfer = JSON.parse(e.dataTransfer.getData('elements'))
            transfer = { ...transfer, x: e.pageX, y: e.pageY }
            dispatch(addShape(transfer))
        }
    }

    return (
        <div onDragOver={e => onDragOver(e)} onDrop={e => onDrop(e)}>
            <div style={{ width: '100%', height: '100vh', margin: 'auto', backgroundColor: 'white' }} >
                {
                    shapes.map((shape: any, index: number) => {
                        switch (shape.type) {
                            case 'rectangle':
                                return <Rectangle key={index} {...shape} />;
                            case 'square':
                                return <Circle key={index} {...shape} />;
                            case 'hexagon':
                                return <Triangle key={index} {...shape} />;
                            default:
                                return null;
                        }
                    })
                }
            </div>
        </div >
    );
};
