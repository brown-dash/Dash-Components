import React from 'react';
import { IGlobalProps, Placement } from '../../global';
import './Button.scss';
export declare enum Type {
    PRIM = "primary",
    SEC = "secondary",
    TERT = "tertiary"
}
export interface IButtonProps extends IGlobalProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: Type;
    active?: boolean;
    text?: string;
    icon?: JSX.Element | string;
    iconPlacement?: Placement;
    color?: string;
    colorPicker?: string;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
