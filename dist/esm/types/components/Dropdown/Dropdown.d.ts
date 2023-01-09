/// <reference types="react" />
import { OrientationType } from '..';
import { IGlobalProps } from '../../global';
import { IListItemProps } from '../ListItem';
import './Dropdown.scss';
export declare enum DropdownType {
    SEARCH = "search",
    SELECT = "select",
    CLICK = "click"
}
export interface IDropdownProps extends IGlobalProps {
    text?: string;
    items: IListItemProps[];
    selected?: IListItemProps;
    location: OrientationType;
    dropdownType: DropdownType;
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
