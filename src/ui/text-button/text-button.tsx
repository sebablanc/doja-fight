import { useContext } from 'react';
import './text-button.css';
import { ElementsDispatchContext } from '../../core/layers/elements-context';
import TextElement from '../text-element/text-element';

function TextButton() {
    const dispatch = useContext(ElementsDispatchContext);

    function handleClick(ComponentElement: any) {
        if (dispatch) {
            const newElement = (props: any) => <ComponentElement {...props} />;

            newElement.id = crypto.randomUUID();

            dispatch({
                element: newElement,
                type: 'added'
            });
        }
    }

    return (
        <>
            <button className='text-button' onClick={() => handleClick(TextElement)}>
                Texto
            </button>
        </>
    );
}

export default TextButton;