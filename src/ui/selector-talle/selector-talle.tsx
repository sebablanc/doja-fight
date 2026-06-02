import { useContext, useState } from 'react';
import './selector-talle.css'
import TablaTalleModal from './tabla-talle-modal';
import { TalleDispatchContext } from '../../core/talle/talle-context';

const TALLES = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "2XL", label: "2XL" }
]

function SelectorTalle() {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useContext(TalleDispatchContext);
    
    const closeModal = () => setOpenModal(false);

    const handleSelectChange = (e:any) => {
        if(dispatch) {
            dispatch(e.target.value);
        }
    }

    return (
        <>
            <TablaTalleModal isOpen={openModal} onClose={closeModal} />
            <section className="selector-talle-container">
                <p>Selecciona tu talle:</p>
                <select id='selector_talles' onChange={handleSelectChange}>
                    {TALLES.map(talle => <option key={`talle_${talle.value}`} value={talle.value}>{talle.label}</option>)}
                </select>
                <a className='common-button' onClick={() => setOpenModal(true)}>tabla de talles</a>
            </section>
        </>
    )
}

export default SelectorTalle;