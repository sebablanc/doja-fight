import { useContext } from "react";
import "./short-button-box.css";
import { ShortDispatchContext } from "../../core/short/short-context";

function ShortButtonBox() {
    const dispatch = useContext(ShortDispatchContext);
    
        function handleClick(element: string) {
            if (dispatch) {
                dispatch(element);
            }
        }
    

    return (
        <div className="short-box-container">
            <button onClick={() => handleClick('short_1_liso.svg')}>
                <img src="/short_1_liso.svg" alt="" />
            </button>
            <button onClick={() => handleClick('short_2.svg')}>
                <img src="/short_2.svg" alt="" />
            </button>
            <button onClick={() => handleClick('short_3.svg')}>
                <img src="/short_3.svg" alt="" />
            </button>
            <button onClick={() => handleClick('short_4.svg')}>
                <img src="/short_4.svg" alt="" />
            </button>
            <button onClick={() => handleClick('short_5.svg')}>
                <img src="/short_5.svg" alt="" />
            </button>
            <button onClick={() => handleClick('short_6.svg')}>
                <img src="/short_6.svg" alt="" />
            </button>
            <button onClick={() => handleClick('short_7.svg')}>
                <img src="/short_7.svg" alt="" />
            </button>
        </div>
    );
}

export default ShortButtonBox;