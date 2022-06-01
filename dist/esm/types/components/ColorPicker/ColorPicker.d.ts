/// <reference types="react" />
import './ColorPicker.scss';
export interface IColorPickerProps {
    text?: string;
    icon?: string;
    onChange: (color: any) => void;
}
export declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;
