/// <reference types="react" />
import './Dropdown.scss';
import { IListBoxItemProps } from '../ListItem';
export interface IDropdownProps {
    title?: string;
    items: IListBoxItemProps[];
    onSelect: (val: any) => void;
    location: 'left' | 'right' | 'below' | 'above';
    iconOnly?: boolean;
    type: 'search' | 'select' | 'click';
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
