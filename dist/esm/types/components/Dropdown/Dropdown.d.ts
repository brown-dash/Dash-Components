import React from 'react';
import './Dropdown.scss';
export interface IDropdownIconProps {
    val: any;
    text?: string;
    icon?: string;
    style?: React.CSSProperties;
}
export interface IDropdownProps {
    title?: string;
    items: IDropdownIconProps[];
    onSelect: (val: any) => void;
    location: 'left' | 'right' | 'below' | 'above';
    iconOnly?: boolean;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export declare const Dropdown: (props: IDropdownProps) => JSX.Element;
