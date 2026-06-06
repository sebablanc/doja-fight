import { useContext, type MouseEventHandler } from "react";
import "./short-selector-modal.css";
import { ShortDispatchContext } from "../../core/short/short-context";
import CloseButton from "../close-button/close-button";

function ShortSelectorModal({ isOpen = false, onClose = (): MouseEventHandler<HTMLButtonElement> | void => { } }) {
    const dispatch = useContext(ShortDispatchContext);

    function handleClick(element: string) {
        if (dispatch) {
            dispatch(element);
        }
    }


    return (
        <div className="short-selector-modal-overlay">
            {isOpen && (
                <div className="short-selector-modal-content">
                    <div className="short-selector-modal-title">
                        <h2>Elegí tu pantalón</h2>
                        <CloseButton onClose={onClose} />
                    </div>
                    <hr />
                    <div className="short-box-container">

                        <button onClick={() => handleClick('short_1_completo.svg')}>
                            <img src="/short_1_adelante.svg" alt="" />
                        </button>
                        <button onClick={() => handleClick('short_2_completo.svg')}>
                            <img src="/short_2_adelante.svg" alt="" />
                        </button>
                        <button onClick={() => handleClick('short_3_completo.svg')}>
                            <img src="/short_3_adelante.svg" alt="" />
                        </button>
                        <button onClick={() => handleClick('short_4_completo.svg')}>
                            <img src="/short_4_adelante.svg" alt="" />
                        </button>
                        <button onClick={() => handleClick('short_5_completo.svg')}>
                            <img src="/short_5_adelante.svg" alt="" />
                        </button>
                        <button onClick={() => handleClick('short_6_completo.svg')}>
                            <img src="/short_6_adelante.svg" alt="" />
                        </button>
                        <button onClick={() => handleClick('short_7_completo.svg')}>
                            <img src="/short_7_adelante.svg" alt="" />
                        </button>
                    </div>
                </div>
            )}
        </div>);
}

export default ShortSelectorModal;