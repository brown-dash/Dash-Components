/// <reference types="react" />
import { IListBoxItemProps } from '../ListItem';
import './ListBox.scss';
export interface IListBoxProps {
    items: IListBoxItemProps[];
    isOpen: boolean;
    filter?: string;
    hasShadow?: boolean;
    setIsOpen: (bool: boolean) => void;
    selectedItem?: IListBoxItemProps;
    setSelectedItem?: (item: IListBoxItemProps) => void;
    backgroundColor?: string;
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
export declare const ListBox: (props: IListBoxProps) => JSX.Element | null;
