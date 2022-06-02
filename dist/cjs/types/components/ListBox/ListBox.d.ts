/// <reference types="react" />
import { ILocation } from '../../global';
import { IListBoxItemProps } from '../ListItem';
import './ListBox.scss';
export interface IListBoxProps {
    items: IListBoxItemProps[];
    filter?: string;
    hasShadow?: boolean;
    selectedItem?: IListBoxItemProps;
    setSelectedItem?: (item: IListBoxItemProps) => void;
    backgroundColor?: string;
    maxItems?: number;
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
export declare const ListBox: (props: IListBoxProps) => JSX.Element;
