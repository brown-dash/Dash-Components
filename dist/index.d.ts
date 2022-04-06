import React from 'react';

interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill' | 'icon';
    text?: string;
    icon?: JSX.Element | string;
    fontSize?: number | string;
    tooltip?: string;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    color?: string;
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none';
    size?: 'small' | 'medium' | 'large';
    hasLabel?: boolean;
    label?: string;
    padding?: number;
    hasBorder?: boolean;
    borderRadius?: number;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    height?: number;
}
declare const Button: (props: IButtonProps) => JSX.Element;

interface IColorPickerProps {
    title?: string;
    onChange: (color: any) => void;
}
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;

interface IListBoxItem {
    val: any;
    text?: string;
    shortcut?: string;
    items?: IListBoxItem[];
    icon?: JSX.Element;
    style?: React.CSSProperties;
}
interface IListBoxProps {
    items: IListBoxItem[];
    isOpen: boolean;
    filter?: string;
    hasShadow?: boolean;
    setIsOpen: (bool: boolean) => void;
    onSelect: (val: any) => void;
    selectedItem?: IListBoxItem;
    setSelectedItem?: (item: IListBoxItem) => void;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
declare const ListBox: (props: IListBoxProps) => JSX.Element | null;

interface IDropdownProps {
    title?: string;
    items: IListBoxItem[];
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
declare const Dropdown: (props: IDropdownProps) => JSX.Element;

interface IEditableTextProps {
    text?: string;
    placeholder?: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
    backgroundColor?: string;
}
declare const EditableText: (props: IEditableTextProps) => JSX.Element;

interface IIconButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill' | 'icon';
    text?: string;
    icon?: JSX.Element | string;
    fontSize?: number | string;
    tooltip?: string;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    color?: string;
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none';
    size?: 'small' | 'medium' | 'large';
    hasLabel?: boolean;
    label?: string;
    padding?: number;
    hasBorder?: boolean;
    borderRadius?: number;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    height?: number;
}
declare const IconButton: (props: IIconButtonProps) => JSX.Element;

export { Button, ColorPicker, Dropdown, EditableText, IButtonProps, IColorPickerProps, IDropdownProps, IEditableTextProps, IIconButtonProps, IListBoxItem, IListBoxProps, IconButton, ListBox };
