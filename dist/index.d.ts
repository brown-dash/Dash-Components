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
    hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'none';
    hasLabel?: boolean;
    label?: string;
    hasRipple?: boolean;
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
    items?: IListBoxItem[];
    icon?: JSX.Element;
    style?: React.CSSProperties;
}

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
}
declare const EditableText: (props: IEditableTextProps) => JSX.Element;

export { Button, ColorPicker, Dropdown, EditableText, IButtonProps, IColorPickerProps, IDropdownProps, IEditableTextProps };
