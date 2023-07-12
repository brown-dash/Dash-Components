/// <reference types="react" />
import { IListItemProps } from '../ListItem';
import './ListBox.scss';
import { IGlobalProps } from '../../global';
export interface IListBoxProps extends IGlobalProps {
    items: IListItemProps[];
    filter?: string;
    selectedVal?: string | number;
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
export declare const ListBox: (props: IListBoxProps) => JSX.Element;
