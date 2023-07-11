/// <reference types="react" />
import { IGlobalProps } from '../../global';
import './ColorPicker.scss';
export interface IColorPickerProps extends IGlobalProps {
    text?: string;
    icon?: JSX.Element | string;
    color?: string;
    onChange: (color: any) => void;
}
export declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;
