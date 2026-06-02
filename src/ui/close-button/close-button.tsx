import type { MouseEventHandler } from "react";

function CloseButton({ onClose = (): MouseEventHandler<HTMLButtonElement> | void => {} }) {
    return (
        <button className="common-button close-button" onClick={onClose}>X</button>
    );
};

export default CloseButton;