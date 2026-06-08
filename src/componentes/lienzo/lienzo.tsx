import React, { useContext } from "react";
import './lienzo.css'
import { Layer, Stage } from "react-konva"
import { ElementsContext, ElementsDispatchContext } from "../../core/layers/elements-context";
import BackgroundImage from "../../ui/background/background";
import { ShortContext } from "../../core/short/short-context";
import ShareButton from "../../ui/share-button/share-button";
import SelectorTalle from "../../ui/selector-talle/selector-talle";

const STAGE_WIDTH = window.innerWidth < 501 ? 350 : 650;
const STAGE_HEIGHT = 580;

async function share(uri: string) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const file = new File([blob], "adelante-image.png", { type: "image/png" });
    const dataToShare = {
        files: [file],
        title: 'Canvas Image'
    };

    if (navigator.share) {
        navigator.share(dataToShare);
    }
}

function Lienzo() {
    const elements = useContext(ElementsContext);
    const short = useContext(ShortContext);
    const dispatch = useContext(ElementsDispatchContext);
    const stageRef = React.useRef<any>(null);
    const handleExport = () => share(stageRef.current?.toDataURL());

    const eliminar = (element: any) => {
        if (dispatch) {
            dispatch({
                element,
                type: 'deleted'
            })
        }
    }

    const cambiar = (element: any) => {
        if (dispatch) {
            dispatch({
                element,
                type: 'changed'
            })
        }
    }

    return (
        <>
            <ShareButton onDelete={() => { }} onClick={handleExport} draggable={false} />
            <SelectorTalle />
            <section className="bottom-section">
                <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef}>
                    <Layer>
                        <BackgroundImage
                            src={short}
                            // x={Math.floor(STAGE_WIDTH / 100) < 2 ? 0 : Math.floor(STAGE_WIDTH / 20)}
                            x={10}
                            width={STAGE_WIDTH > 500 ? 500 : 320}
                            height={STAGE_WIDTH > 500 ? STAGE_HEIGHT - 50 : 580}
                        />
                        {elements && elements.map((Element: any) => (
                            <Element key={Element.id} onDelete={() => eliminar(Element)} onChange={() => cambiar(Element)} />
                        ))}
                    </Layer>
                </Stage>
            </section>
        </>
    )
}

export default Lienzo