import React from 'react';
import { IListItemProps } from '../ListItem';
import './ListBox.scss';
import { IGlobalProps } from '../../global';
export interface IListBoxProps extends IGlobalProps {
    items: IListItemProps[];
    filter?: string;
    selectedVal?: string | number;
    setSelectedVal?: (val: string | number) => unknown;
    maxItems?: number;
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
export declare const ListBox: (props: IListBoxProps) => JSX.Element;
