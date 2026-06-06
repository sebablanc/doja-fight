import type { MouseEventHandler } from "react";

export default interface ElementProps {
    onDelete: Function;
    onChange?: Function;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    textSended?: string;
    fontFamilySelected?: string;
    x?: number;
    y?: number;
    draggable: boolean;
}