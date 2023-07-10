/// <reference types="react" />
import { OrientationType } from '..';
import { IGlobalProps } from '../../global';
import { IListItemProps } from '../ListItem';
import './Dropdown.scss';
export declare enum DropdownType {
    SELECT = "select",
    CLICK = "click"
}
export interface IDropdownProps extends IGlobalProps {
    items: IListItemProps[];
    location: OrientationType;
    dropdownType: DropdownType;
    title?: string;
    selected?: IListItemProps;
    maxItems?: number;
    color?: string;
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
