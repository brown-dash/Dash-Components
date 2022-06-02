import React from 'react';
import './ListItem.scss';
import { ILocation } from '../../global';
export interface IListBoxItemProps {
    ind?: number;
    text?: string;
    description?: string;
    shortcut?: string;
    items?: IListBoxItemProps[];
    selected?: boolean;
    icon?: JSX.Element;
    style?: React.CSSProperties;
    setSelectedItem?: (item: IListBoxItemProps) => void;
    onClick?: () => void;
    preventClick?: boolean;
    backgroundColor?: string;
    toggleOverlay?: (key: string, location: ILocation, element: JSX.Element) => void;
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
