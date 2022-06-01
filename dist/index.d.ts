import React from 'react';

declare enum Colors {
    BLACK = "#000000",
    DARK_GRAY = "#323232",
    MEDIUM_GRAY = "#9F9F9F",
    LIGHT_GRAY = "#DFDFDF",
    WHITE = "#FFFFFF",
    MEDIUM_BLUE = "#4476F7",
    MEDIUM_BLUE_ALT = "#4476f73d",
    LIGHT_BLUE = "#BDDDF5",
    PINK = "#E0217D",
    YELLOW = "#F5D747",
    DROP_SHADOW = "#32323215",
    ERROR_RED = "#FF9494",
    SUCCESS_GREEN = "#4BB543",
    TRANSPARENT = "transparent"
}
declare enum FontSize {
    JUMBO_ICON = "5rem",
    ICON = "3rem",
    HEADER = "1.6rem",
    DEFAULT = "1rem",
    SECONDARY = "1.3rem",
    LABEL = "0.6rem"
}
declare enum Padding {
    MINIMUM_PADDING = "4px",
    SMALL_PADDING = "8px",
    MEDIUM_PADDING = "16px",
    LARGE_PADDING = "32px"
}
declare enum IconSizes {
    ICON_SIZE = "28px"
}
declare enum Borders {
    STANDARD = "solid 1px #9F9F9F",
    STANDARD_BORDER_RADIUS = "5px"
}
declare enum Shadows {
    STANDARD_SHADOW = "0px 3px 4px rgba(0, 0, 0, 0.3)"
}
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
    borderRadius?: number | string;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    height?: number;
}
declare const Button: (props: IButtonProps) => JSX.Element;

interface IColorPickerProps {
    text?: string;
    icon?: string;
    onChange: (color: any) => void;
}
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;

interface ILocation {
    top: number;
    left: number;
    width: number;
    height: number;
}
declare const getHeight: (height: number | undefined, size: Size | undefined) => number;
declare const colorConvert: (color: any) => any;
declare const isDark: (color: any) => boolean;

interface IListBoxItemProps {
    ind?: number;
    text?: string;
    description?: string;
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
    toggleBackgroundColor?: string;
    boxBackgroundColor?: string;
    selected?: IListBoxItemProps;
    location: 'left' | 'right' | 'below' | 'above';
    type: 'search' | 'select' | 'click';
    maxItems?: number;
    height?: number;
    size?: Size;
    color?: string;
    toggleOverlay?: (key: string, location: ILocation, element: JSX.Element) => void;
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
    height?: number;
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
    size?: Size;
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

interface IPopupProps {
    text?: string;
    icon: JSX.Element | string;
    toggleBorderRadius?: number | string;
    toggleBackgroundColor?: string;
    boxBackgroundColor?: string;
    children?: any;
    location?: 'left' | 'right' | 'below' | 'above';
    size?: Size;
    height?: number;
    toggleOverlay?: (key: string, location: ILocation, element: JSX.Element) => void;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
declare const Popup: (props: IPopupProps) => JSX.Element;

interface IPopupListProps {
    text?: string;
    icon: JSX.Element;
    items: IListBoxItemProps[];
    toggleBackgroundColor?: string;
    boxBackgroundColor?: string;
    selected?: IListBoxItemProps;
    location?: 'left' | 'right' | 'below' | 'above';
    maxItems?: number;
    size?: Size;
    height?: number;
    addToOverlay?: (location: ILocation, element: JSX.Element) => void;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
declare const PopupList: (props: IPopupListProps) => JSX.Element;

interface IModalProps {
    children: JSX.Element;
    initialIsOpen: boolean;
    title?: string;
    backgroundColor?: string;
}
declare const Modal: (props: IModalProps) => JSX.Element | null;

export { Borders, Button, ColorPicker, Colors, Dropdown, EditableText, FontSize, IButtonProps, IColorPickerProps, IDropdownProps, IEditableTextProps, IIconButtonProps, IListBoxProps, ILocation, IModalProps, IPopupListProps, IPopupProps, IconButton, IconSizes, ListBox, Modal, Padding, Popup, PopupList, Shadows, Size, colorConvert, getHeight, isDark };
