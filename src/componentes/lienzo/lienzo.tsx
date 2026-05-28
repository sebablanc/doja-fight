import React, { useContext } from "react";
import './lienzo.css'
import { Layer, Stage } from "react-konva"
import { ElementsContext, ElementsDispatchContext } from "../../core/layers/elements-context";
import BackgroundImage from "../../ui/background/background";
import { ShortContext } from "../../core/short/short-context";
import ShareButton from "../../ui/share-button/share-button";
import SelectorTalle from "../../ui/selector-talle/selector-talle";
import { TalleContext } from "../../core/talle/talle-context";

const STAGE_WIDTH = window.innerWidth < 501 ? window.innerWidth : 650;
const STAGE_HEIGHT = 400;

async function share(uri: string, talle: string) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const file = new File([blob], "konva-image.png", { type: "image/png" });
    const dataToShare = {
        files: [file],
        title: 'Canvas Image',
        text: `Hola lo quiero en ${talle}`
    };

    if (navigator.share) {
        navigator.share(dataToShare);
    }
}

function Lienzo() {
    const elements = useContext(ElementsContext);
    const short = useContext(ShortContext);
    const talle = useContext(TalleContext);
    const dispatch = useContext(ElementsDispatchContext);
    const stageRef = React.useRef<any>(null);
    const handleExport = () => share(stageRef.current?.toDataURL(), talle);

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
                            x={Math.floor(STAGE_WIDTH / 100) < 2 ? 0 : Math.floor(STAGE_WIDTH / 20)}
                            width={STAGE_WIDTH > 500 ? 500 : 350}
                            height={STAGE_WIDTH > 500 ? STAGE_HEIGHT - 50 : 300}
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