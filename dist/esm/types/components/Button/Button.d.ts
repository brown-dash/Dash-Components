import React from 'react';
import { Alignment, IGlobalProps, Placement, Type } from '../../global';
import './Button.scss';
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
    uppercase?: boolean;
    align?: Alignment;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
