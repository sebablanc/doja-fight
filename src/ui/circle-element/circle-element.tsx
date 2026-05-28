import { Circle } from "react-konva";

function CircleElement() {
    return (
        <Circle
            x={70}
            y={70}
            radius={50}
            fill="red"
            stroke="black"
            strokeWidth={4}
            draggable
        />
    );
}

export default CircleElement;