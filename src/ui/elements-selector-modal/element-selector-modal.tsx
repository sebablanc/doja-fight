import "./element-selector-modal.css";
import FileteadoElement from "../fileteado-element/fileteado-element";
import FlecosElement from "../flecos-element/flecos-element";
import MoniosElement from "../monios-element/monios-element";
import TribalOneElement from "../tribal-one-element/tribal-one-element";
import TribalTwoElement from "../tribal-two-element/tribal-two-element";
import { useContext, type MouseEventHandler } from "react";
import { ElementsDispatchContext } from "../../core/layers/elements-context";
import CloseButton from "../close-button/close-button";

const elements = [
    { thumbnail: '/fileteado.svg', value: FileteadoElement },
    { thumbnail: '/flecos.svg', value: FlecosElement },
    { thumbnail: '/moños.svg', value: MoniosElement },
    { thumbnail: '/tribal_1.svg', value: TribalOneElement },
    { thumbnail: '/tribal_2.svg', value: TribalTwoElement }
]

function ElementsSelectorModal({ isOpen = false, onClose = (): MouseEventHandler<HTMLButtonElement> | void => { } }) {
    const dispatch = useContext(ElementsDispatchContext);

    function handleClick(ComponentElement: any) {
        if (dispatch) {
            const newElement = (props: any) => <ComponentElement {...props} />;

            newElement.id = crypto.randomUUID();

            dispatch({
                element: newElement,
                type: 'added'
            });
        }
    }


    return (
        <div className="elements-selector-modal-overlay">
            {isOpen && (
                <div className="elements-selector-modal-content">
                    <div className="elements-selector-modal-title">
                        <h2>Elegí tus accesorios</h2>
                        <CloseButton onClose={onClose} />
                    </div>
                    <hr />
                    <div className="button-box-container">
                        {elements.map(el => (
                            <button key={el.thumbnail} onClick={() => handleClick(el.value)}>
                                <img src={el.thumbnail} alt="" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>);
}

export default ElementsSelectorModal;