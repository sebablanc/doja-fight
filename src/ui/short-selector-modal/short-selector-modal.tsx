import { useContext, type MouseEventHandler } from "react";
import "./short-selector-modal.css";
import { ShortDispatchContext } from "../../core/short/short-context";
import CloseButton from "../close-button/close-button";

const shorts = [
    { thumbnail: '/short_1_adelante.svg', imageName: 'short_1_completo.svg' },
    { thumbnail: '/short_2_adelante.svg', imageName: 'short_2_completo.svg' },
    { thumbnail: '/short_3_adelante.svg', imageName: 'short_3_completo.svg' },
    { thumbnail: '/short_4_adelante.svg', imageName: 'short_4_completo.svg' },
    { thumbnail: '/short_5_adelante.svg', imageName: 'short_5_completo.svg' },
    { thumbnail: '/short_6_adelante.svg', imageName: 'short_6_completo.svg' },
    { thumbnail: '/short_7_adelante.svg', imageName: 'short_7_completo.svg' },
]

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
                        {shorts.map(value => (
                            <button key={value.imageName} onClick={() => handleClick(value.imageName)}>
                                <img src={value.thumbnail} alt="" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>);
}

export default ShortSelectorModal;