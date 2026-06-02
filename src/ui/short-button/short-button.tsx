import './short-button.css';
import { useContext, useState } from "react";
import { ShortContext } from "../../core/short/short-context";
import ShortSelectorModal from '../short-selector-modal/short-selector-modal';

function ShortButton() {
    const short = useContext(ShortContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <ShortSelectorModal isOpen={openModal} onClose={() => setOpenModal(false)} />
            <button className='short-button' onClick={() => setOpenModal(true)}>
                <img className="short-button-img" src={short} />
            </button>
        </>
    );
}

export default ShortButton;