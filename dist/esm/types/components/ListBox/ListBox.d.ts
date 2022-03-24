import React from 'react';
import './ListBox.scss';
export interface IListBoxItem {
    val: any;
    text?: string;
    items?: IListBoxItem[];
    icon?: JSX.Element;
    style?: React.CSSProperties;
}
export interface IListBoxProps {
    items: IListBoxItem[];
    isOpen: boolean;
    filter?: string;
    setIsOpen: (bool: boolean) => void;
    onSelect: (val: any) => void;
    selectedItem?: IListBoxItem;
    setSelectedItem?: (item: IListBoxItem) => void;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export declare const ListBox: (props: IListBoxProps) => JSX.Element | null;
