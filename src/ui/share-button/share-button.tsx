import type ElementProps from "../../core/interfaces/elements-props";
import './share-button.css';

function ShareButton({ onClick }: ElementProps) {

    return (
        <button className="common-button share-button" onClick={onClick}>
            <img src="/share.svg" alt="compartir diseño" />
        </button>
    )
}

export default ShareButton;