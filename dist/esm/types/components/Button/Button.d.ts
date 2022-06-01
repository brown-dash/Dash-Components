import React from 'react';
import { Size } from '../../global/globalEnums';
import './Button.scss';
export interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill' | 'icon';
    isActive?: boolean;
    text?: string;
    icon?: JSX.Element | string;
    fontSize?: number | string;
    tooltip?: string;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    activeColor?: string;
    color?: string;
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none';
    size?: Size;
    hasLabel?: boolean;
    label?: string;
    padding?: number;
    hasBorder?: boolean;
    borderRadius?: number | string;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    height?: number;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
