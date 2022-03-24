import React from 'react';
import './Button.scss';
export interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill' | 'icon';
    text?: string;
    icon?: JSX.Element | string;
    fontSize?: number | string;
    tooltip?: string;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    color?: string;
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'none';
    hasLabel?: boolean;
    label?: string;
    hasRipple?: boolean;
    hasBorder?: boolean;
    borderRadius?: number;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    height?: number;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
