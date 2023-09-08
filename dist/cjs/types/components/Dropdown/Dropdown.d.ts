import React from 'react';
import { IGlobalProps, Placement } from '../../global';
import { IListItemProps } from '../ListItem';
import './Dropdown.scss';
export declare enum DropdownType {
    SELECT = "select",
    CLICK = "click"
}
export interface IDropdownProps extends IGlobalProps {
    items: IListItemProps[];
    placement?: Placement;
    dropdownType: DropdownType;
    title?: string;
    closeOnSelect?: boolean;
    iconProvider?: (active: boolean, placement?: Placement) => JSX.Element;
    selectedVal?: string;
    setSelectedVal?: (val: string | number) => unknown;
    maxItems?: number;
    uppercase?: boolean;
    activeChanged?: (isOpen: boolean) => void;
    onDown?: (e: React.PointerEvent, val: string | number) => void;
    onItemDown?: (e: React.PointerEvent, val: number | string) => void;
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
