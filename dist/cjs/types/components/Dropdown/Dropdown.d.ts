/// <reference types="react" />
import { IListBoxItemProps } from '../ListItem';
import './Dropdown.scss';
export interface IDropdownProps {
    title?: string;
    items: IListBoxItemProps[];
    backgroundColor?: string;
    selected?: IListBoxItemProps;
    location: 'left' | 'right' | 'below' | 'above';
    type: 'search' | 'select' | 'click';
    maxItems?: number;
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
