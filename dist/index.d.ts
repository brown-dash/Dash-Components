import React from 'react';

declare enum Size {
    SMALL = "30px",
    MEDIUM = "35px",
    LARGE = "40px"
}

interface IButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill' | 'icon';
    isActive?: boolean;
    text?: string;
    icon?: JSX.Element | string;
    fontSize?: number | string;
    tooltip?: string;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    activeColor?: string;
    color?: string;
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none';
    size?: Size;
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
    setSelectedItem?: (item: IListBoxItemProps) => void;
    onClick?: () => void;
    preventClick?: boolean;
    backgroundColor?: string;
}

interface IDropdownProps {
    title?: string;
    items: IListBoxItemProps[];
    backgroundColor?: string;
    selected?: IListBoxItemProps;
    location: 'left' | 'right' | 'below' | 'above';
    type: 'search' | 'select' | 'click';
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
declare const Dropdown: (props: IDropdownProps) => JSX.Element;

interface IEditableTextProps {
    text?: string;
    placeholder?: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
    backgroundColor?: string;
    size?: Size;
    height?: number | string;
}
declare const EditableText: (props: IEditableTextProps) => JSX.Element;

interface IIconButtonProps {
    onClick?: (event: React.MouseEvent) => void;
    onDoubleClick?: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill' | 'icon';
    isActive?: boolean;
    text?: string;
    icon?: JSX.Element | string;
    fontSize?: number | string;
    tooltip?: string;
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    activeColor?: string;
    color?: string;
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none';
    size?: 'small' | 'medium' | 'large';
    hasLabel?: boolean;
    label?: string;
    padding?: number;
    hasBorder?: boolean;
    isCircle?: boolean;
    borderRadius?: number | string;
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
declare const ListBox: (props: IListBoxProps) => JSX.Element | null;

export { Button, ColorPicker, Dropdown, EditableText, IButtonProps, IColorPickerProps, IDropdownProps, IEditableTextProps, IIconButtonProps, IListBoxProps, IconButton, ListBox };
