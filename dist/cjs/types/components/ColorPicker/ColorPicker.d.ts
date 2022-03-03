/// <reference types="react" />
import './ColorPicker.scss';
export interface IColorPickerProps {
    title?: string;
    onChange: (color: any) => void;
}
export declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;
