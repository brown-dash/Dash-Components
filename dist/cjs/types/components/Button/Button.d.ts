import React from 'react';
import './Button.scss';
export interface IButtonProps {
    text?: string;
    icon?: JSX.Element | string;
    onClick: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill';
    primaryColor?: string;
    rounded?: boolean;
    textColor?: string;
    secondaryColor?: string;
    hoverStyle?: 'hover' | 'none';
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    fontSize?: number | string;
    height?: number;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
