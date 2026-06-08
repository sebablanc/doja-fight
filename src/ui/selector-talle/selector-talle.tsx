import { useState } from 'react';
import './selector-talle.css'
import TablaTalleModal from './tabla-talle-modal';

function SelectorTalle() {
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => setOpenModal(false);

    return (
        <>
            <TablaTalleModal isOpen={openModal} onClose={closeModal} />
            <a className='tabla-talle-button common-button' onClick={() => setOpenModal(true)}>Tabla de talles</a>
        </>
    )
}

export default SelectorTalle;