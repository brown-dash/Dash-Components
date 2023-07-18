/// <reference types="react" />
import { IGlobalProps } from '../../global';
import './ListItem.scss';
export interface IListItemProps extends IGlobalProps {
    ind?: number;
    text?: string;
    val: string | number;
    icon?: JSX.Element;
    description?: string;
    shortcut?: string;
    items?: IListItemProps[];
    selected?: boolean;
    setSelectedVal?: (val: string | number) => unknown;
    onClick?: () => void;
    uppercase?: boolean;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export declare const ListItem: (props: IListItemProps) => JSX.Element;
