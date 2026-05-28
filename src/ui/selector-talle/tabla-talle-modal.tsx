import type { MouseEventHandler } from "react";

const NOMBRE_IMAGEN_TABLA_TALLE = '/tabla_de_talles.png';

function TablaTalleModal({ isOpen = false, onClose = (): MouseEventHandler<HTMLButtonElement> | void => {} }) {
    return (
        <>
            {isOpen && (
                <div className="selector-talle-tabla-overlay">
                    <div className="selector-talle-tabla-content" onClick={(e) => e.stopPropagation()}>
                        <button className="editable-text-button close-text-button" onClick={onClose}>X</button>
                        <img src={NOMBRE_IMAGEN_TABLA_TALLE} />
                    </div>
                </div>

            )}
        </>
    )
}

export default TablaTalleModal;