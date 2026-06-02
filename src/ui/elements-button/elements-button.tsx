import { useState } from 'react';
import './elements-button.css';
import ElementsSelectorModal from '../elements-selector-modal/element-selector-modal';

function ElementsButton() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <ElementsSelectorModal isOpen={openModal} onClose={() => setOpenModal(false)} />
            <button className='elements-button' onClick={() => setOpenModal(true)}>
                <img src='fileteado.svg' alt='elegí tu accesorio' />
            </button>
        </>
    );
}

export default ElementsButton;