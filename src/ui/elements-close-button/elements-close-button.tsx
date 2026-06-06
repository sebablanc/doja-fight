import type { MouseEventHandler } from "react";
import { Label, Tag, Text } from "react-konva";

function ElementsCloseButton({ width = 0, height=0 , x = 0, y=0, visible = true,  onClick = (): MouseEventHandler<HTMLButtonElement> | void => { } }) {
    return (
        <Label
            width={width}
            height={height}
            x={x}
            y={y}
            visible={visible}
            onClick={onClick}
            onTap={onClick}>
            <Tag fill="#9d648d" cornerRadius={5} />
            <Text
                text="X"
                fontFamily="Calibri"
                fontSize={15}
                padding={5}
                fill="#f1f1f1"
            />
        </Label>
    );
};

export default ElementsCloseButton;