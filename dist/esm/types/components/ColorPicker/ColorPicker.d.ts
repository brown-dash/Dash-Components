/// <reference types="react" />
import { IGlobalProps } from '../../global';
import './ColorPicker.scss';
export declare type ColorPickerType = "chrome" | "github" | "block" | "slider";
export interface IColorPickerProps extends IGlobalProps {
    text?: string;
    icon?: JSX.Element | string;
    colorPickerType?: ColorPickerType;
    selectedColor?: string;
    setSelectedColor: (color: any) => unknown;
}
export declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;
