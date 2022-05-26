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
    setSelectedItem?: (item: IListBoxItemProps) => void;
    onClick?: () => void;
    preventClick?: boolean;
    backgroundColor?: string;
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
