/// <reference types="react" />
import './ListBox.scss';
import { IListBoxItemProps } from '../ListItem';
export interface IListBoxProps {
    items: IListBoxItemProps[];
    isOpen: boolean;
    filter?: string;
    hasShadow?: boolean;
    setIsOpen: (bool: boolean) => void;
    onSelect: (val: any) => unknown;
    selectedItem?: IListBoxItemProps;
    setSelectedItem?: (item: IListBoxItemProps) => void;
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
