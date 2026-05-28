import { useState, type KeyboardEventHandler } from "react";
import { Html } from "react-konva-utils";
import './editable-text-input.css';

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

interface MyComponentProps {
    width: number;
    height: number;
    value: string;
    isOpen: boolean;
    onKeyDown: KeyboardEventHandler<HTMLElement>;
    onClose: Function;
}

export function EditableTextInput({
    width = 100,
    height = 0,
    value = '',
    isOpen = false,
    onKeyDown,
    onClose
}: MyComponentProps) {
    const [text, setText] = useState(value);

    const oldText = value;

    const onKeyDownHandler = (e: any) => {
        if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
            onClose(text);
            onKeyDown(e)
        }

    }
    return (
        <Html>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="editable-text-button close-text-button" onClick={() => onClose(oldText)}>X</button>
                        <input
                            id="text-form"
                            className="text-input"
                            width={width}
                            height={height}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={onKeyDownHandler}
                            onSubmit={onKeyDownHandler}
                        />
                        <button className="editable-text-button change-text-button" onClick={() => onClose(text)}>Cambiar texto</button>
                    </div>
                </div>
            )}
        </Html>
    );
}
