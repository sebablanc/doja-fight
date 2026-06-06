import { useState, type KeyboardEventHandler } from "react";
import { Html } from "react-konva-utils";
import './editable-text-input.css';
import FontSelector from "./font-selector/font-selector";

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

interface MyComponentProps {
    width: number;
    height: number;
    value: string;
    fontFamilySended: string;
    isOpen: boolean;
    onKeyDown: KeyboardEventHandler<HTMLElement>;
    onClose: Function;
}

export function EditableTextInput({
    width = 100,
    height = 0,
    value = '',
    fontFamilySended = 'ancient',
    isOpen = false,
    onKeyDown,
    onClose
}: MyComponentProps) {
    const [text, setText] = useState(value);
    const [fontFamily, setFontFamily] = useState(fontFamilySended);

    const oldText = value;
    const oldFont = fontFamilySended;

    const onKeyDownHandler = (e: any) => {
        if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
            onClose(text, fontFamily);
            onKeyDown(e)
        }
    }

    const fontChangeHandler = (e: any) => {
        setFontFamily(e)
    }
    return (
        <Html>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-title">
                            <p>Seleccioná el tipo de letra</p>
                            <button className="common-button close-button" onClick={() => onClose(oldText, oldFont)}>X</button>
                        </div>
                        <hr />
                        <FontSelector value={fontFamily} onChange={fontChangeHandler} />
                        <input
                            id="text-form"
                            className={`text-input ${fontFamily}`}
                            width={width}
                            height={height}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={onKeyDownHandler}
                            onSubmit={onKeyDownHandler}
                        />
                        <button className="common-button change-text-button" onClick={() => onClose(text, fontFamily)}>Cambiar texto</button>
                    </div>
                </div>
            )}
        </Html>
    );
}
