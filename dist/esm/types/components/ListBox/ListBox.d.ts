/// <reference types="react" />
import { IListItemProps } from '../ListItem';
import './ListBox.scss';
import { IGlobalProps } from '../../global';
export interface IListBoxProps extends IGlobalProps {
    items: IListItemProps[];
    filter?: string;
    selectedItem?: IListItemProps;
    setSelectedItem?: (item: IListItemProps) => void;
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
export declare const ListBox: (props: IListBoxProps) => JSX.Element;
