import { Image } from "react-konva";
import useImage from "use-image";
interface backImage {
    src: string,
    x: number,
    width: number,
    height: number
}
const BackgroundImage = ({ src, ...rest }: backImage) => {
    const [image] = useImage(src, 'anonymous');
    return <Image image={image} {...rest} />;
};

export default BackgroundImage;