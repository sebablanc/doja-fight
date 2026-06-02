import { useCallback, useRef, useState } from "react";
import { Group, Text, Transformer } from "react-konva";
import { EditableTextInput } from "./editable-text-input";
import type ElementProps from "../../core/interfaces/elements-props";
import ElementsCloseButton from "../elements-close-button/elements-close-button";

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

function TextElement({ textSended = "Doja fight", x = 10, y = 10, draggable = true, onDelete }: ElementProps) {
    const [text, setText] = useState(textSended);
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [xPosition, setXPosition] = useState(x);
    const [yPosition, setYPosition] = useState(y);
    const [circleXPosition, setCircleXPosition] = useState(125);
    const textRef = useRef<any>(null);
    const trRef = useRef<any>(null);

    const addTransform = () => {
        trRef.current.nodes([textRef.current]);
        setShowDeleteButton(true);
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

    function handleEscapeKeys(e: any) {
        if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
            setIsEditing(false);
        }
    }

    const handleTextDblClick = useCallback(() => {
        cleanTransform();
        setIsEditing(true);
    }, []);

    const handleTextClose = useCallback((newText: any) => {
        setText(newText);
        setIsEditing(false)
    }, []);

    const dragEndHandler = useCallback((e: any) => {
        setXPosition(e.target.attrs.x);
        setYPosition(e.target.attrs.y);
    }, []);

    const resizeHandler = useCallback((e: any) => {
        setCircleXPosition(e.width)
    }, []);

    if (isEditing) {
        return (
            <EditableTextInput
                width={500}
                height={0}
                value={text}
                isOpen={isEditing}
                onClose={handleTextClose}
                onKeyDown={handleEscapeKeys}
            />
        )
    } else {
        return (
            <Group
                x={xPosition}
                y={yPosition}
                draggable={draggable}
                onDragEnd={dragEndHandler}>
                <ElementsCloseButton
                    width={20}
                    height={20}
                    x={circleXPosition}
                    y={-30}
                    visible={showDeleteButton}
                    onClick={eliminar}
                />
                <Text
                    text={text}
                    fontSize={30}
                    fontFamily="Calibri"
                    fill="black"
                    ref={textRef}
                    onDblClick={handleTextDblClick}
                    onDblTap={handleTextDblClick}
                    onClick={addTransform}
                    onTap={addTransform}
                />
                <Transformer ref={trRef} onTransformEnd={cleanTransform}
                    boundBoxFunc={(_, newBox) => {
                        resizeHandler(newBox);
                        return newBox;
                    }}
                />
            </Group>
        );
    }
}

export default TextElement;