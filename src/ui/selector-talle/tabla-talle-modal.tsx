import type { MouseEventHandler } from "react";
import CloseButton from "../close-button/close-button";

const NOMBRE_IMAGEN_TABLA_TALLE = '/tabla_de_talles.png';

function TablaTalleModal({ isOpen = false, onClose = (): MouseEventHandler<HTMLButtonElement> | void => {} }) {
    return (
        <>
            {isOpen && (
                <div className="selector-talle-tabla-overlay">
                    <div className="selector-talle-tabla-content" onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClose={onClose} />
                        <img src={NOMBRE_IMAGEN_TABLA_TALLE} />
                    </div>
                </div>

            )}
        </>
    )
}

export default TablaTalleModal;