import { useCallback, useRef, useState } from "react";
import { Group, Image, Transformer } from "react-konva";
import useImage from "use-image";
import type ElementProps from "../../core/interfaces/elements-props";
import ElementsCloseButton from "../elements-close-button/elements-close-button";

function TribalTwoElement({ onDelete }: ElementProps) {
    const [image] = useImage('/tribal_2.svg', "anonymous");
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [circleXPosition, setCircleXPosition] = useState(300);
    const imageRef = useRef<any>(null);
    const trRef = useRef<any>(null);

    const addTransform = () => {
        if (!!trRef.current && !!trRef.current.nodes) {
            trRef.current.nodes([imageRef.current]);
            setShowDeleteButton(true);
        }
    }

    const cleanTransform = () => {
        if (!!trRef.current && !!trRef.current.nodes) {
            trRef.current.nodes([]);
            setShowDeleteButton(false);
        }
    }

    const eliminar = () => {
        if (!!trRef.current && !!trRef.current.nodes) {
            trRef.current.nodes([]);
            setShowDeleteButton(false);
            onDelete();
        }
    }

    const dragEndHandler = useCallback((e: any) => {
        setXPosition(e.target.attrs.x);
        setYPosition(e.target.attrs.y);
    }, []);

    const resizeHandler = useCallback((e: any) => {
        setCircleXPosition(e.width)
    }, []);


    return (
        <Group
            x={xPosition}
            y={yPosition}
            draggable
            onDragEnd={dragEndHandler}>
            <ElementsCloseButton
                width={20}
                height={20}
                x={circleXPosition}
                y={-20}
                visible={showDeleteButton}
                onClick={eliminar}
             />
            <Image
                image={image}
                width={300}
                height={80}
                ref={imageRef}
                onClick={addTransform}
                onTap={addTransform} />

            <Transformer ref={trRef} onTransformEnd={cleanTransform}
                boundBoxFunc={(_, newBox) => {
                    resizeHandler(newBox);
                    return newBox;
                }} />
        </Group>
    );
}

export default TribalTwoElement;