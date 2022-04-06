import React from 'react';
import './IconButton.scss';
export interface IIconButtonProps {
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
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none';
    size?: 'small' | 'medium' | 'large';
    hasLabel?: boolean;
    label?: string;
    padding?: number;
    hasBorder?: boolean;
    borderRadius?: number;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    height?: number;
}
export declare const IconButton: (props: IIconButtonProps) => JSX.Element;
