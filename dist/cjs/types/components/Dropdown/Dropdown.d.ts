/// <reference types="react" />
import { IGlobalProps, Placement } from '../../global';
import { IListItemProps } from '../ListItem';
import './Dropdown.scss';
export declare enum DropdownType {
    SELECT = "select",
    CLICK = "click"
}
export interface IDropdownProps extends IGlobalProps {
    items: IListItemProps[];
    placement?: Placement;
    dropdownType: DropdownType;
    title?: string;
    selectedVal?: string;
    setSelectedVal?: (val: string | number) => unknown;
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
