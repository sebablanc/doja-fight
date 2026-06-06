import './short-button.css';
import { useContext, useEffect, useState } from "react";
import { ShortContext } from "../../core/short/short-context";
import ShortSelectorModal from '../short-selector-modal/short-selector-modal';

function ShortButton() {
    const short = useContext(ShortContext);
    const [openModal, setOpenModal] = useState(false);
    const [shortButton, setShortButton] = useState('');

    useEffect(() => {
        setShortButton(`${short.substring(0, short.lastIndexOf('_'))}_adelante.svg` );
    }, [short]);

    return (
        <>
            <ShortSelectorModal isOpen={openModal} onClose={() => setOpenModal(false)} />
            <button className='short-button' onClick={() => setOpenModal(true)}>
                <img className="short-button-img" src={shortButton} />
            </button>
        </>
    );
}

export default ShortButton;