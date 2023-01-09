import React from 'react';
import { IGlobalProps } from '../../global';
import './Button.scss';
export declare enum Type {
    PRIM = "primary",
    SEC = "secondary",
    TERT = "tertiary"
}
export declare enum OrientationType {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
export interface IButtonProps extends IGlobalProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: Type;
    active?: boolean;
    text?: string;
    icon?: JSX.Element | string;
    iconPosition?: OrientationType;
    color?: string;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
