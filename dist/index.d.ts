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

interface IListBoxItemProps {
    val: any;
    text?: string;
    shortcut?: string;
    items?: IListBoxItemProps[];
    selected?: boolean;
    icon?: JSX.Element;
    style?: React.CSSProperties;
    onSelect: (val: any) => unknown;
}

interface IDropdownProps {
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

interface IListBoxProps {
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
declare const ListBox: (props: IListBoxProps) => JSX.Element | null;

export { Button, ColorPicker, Dropdown, EditableText, IButtonProps, IColorPickerProps, IDropdownProps, IEditableTextProps, IIconButtonProps, IListBoxProps, IconButton, ListBox };
