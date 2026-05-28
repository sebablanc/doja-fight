import type ElementProps from "../../core/interfaces/elements-props";
import './share-button.css';

function ShareButton({ onClick }: ElementProps) {

    return (
        <button className="share-button" onClick={onClick}>
            <img src="/share.svg" alt="" />
            <p>Compartime tu diseño!</p>
        </button>
    )
}

export default ShareButton;