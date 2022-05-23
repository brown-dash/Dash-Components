import React from 'react';
import './ListItem.scss';
export interface IListBoxItemProps {
    val: any;
    text?: string;
    shortcut?: string;
    items?: IListBoxItemProps[];
    selected?: boolean;
    icon?: JSX.Element;
    style?: React.CSSProperties;
    onSelect: (val: any) => unknown;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export declare const ListItem: (props: IListBoxItemProps) => JSX.Element;
