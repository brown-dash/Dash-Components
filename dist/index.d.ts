import React$1, { PointerEventHandler } from 'react';

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
    XSMALL = "xsmall",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

interface ILocation {
    top: number;
    left: number;
    width: number;
    height: number;
    override?: 'left' | 'bottom' | 'top' | 'right';
}
declare const getFontSize: (size: Size | undefined, icon?: boolean | undefined) => "11px" | "7px" | "15px" | "9px" | "17px" | "22px";
declare const getHeight: (height: number | undefined, size: Size | undefined) => number;
declare const colorConvert: (color: any) => any;
declare const isDark: (color: any) => boolean;

interface IGlobalProps {
    size?: Size;
    height?: number;
    width?: number;
    type?: Type;
    inactive?: boolean;
    tooltip?: string;
    tooltipPlacement?: Placement;
    label?: string;
    onPointerDown?: PointerEventHandler | undefined;
    onPointerDownCapture?: PointerEventHandler | undefined;
    onPointerMove?: PointerEventHandler | undefined;
    onPointerMoveCapture?: PointerEventHandler | undefined;
    onPointerUp?: PointerEventHandler | undefined;
    onPointerUpCapture?: PointerEventHandler | undefined;
    onPointerCancel?: PointerEventHandler | undefined;
    onPointerCancelCapture?: PointerEventHandler | undefined;
    onPointerEnter?: PointerEventHandler | undefined;
    onPointerEnterCapture?: PointerEventHandler | undefined;
    onPointerLeave?: PointerEventHandler | undefined;
    onPointerLeaveCapture?: PointerEventHandler | undefined;
    onPointerOver?: PointerEventHandler | undefined;
    onPointerOverCapture?: PointerEventHandler | undefined;
    onPointerOut?: PointerEventHandler | undefined;
    onPointerOutCapture?: PointerEventHandler | undefined;
    onGotPointerCapture?: PointerEventHandler | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler | undefined;
    onLostPointerCapture?: PointerEventHandler | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler | undefined;
    style?: React.CSSProperties;
}
declare type Placement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';

declare enum Type {
    PRIM = "primary",
    SEC = "secondary",
    TERT = "tertiary"
}
interface IButtonProps extends IGlobalProps {
    onClick?: (event: React$1.MouseEvent) => void;
    onDoubleClick?: (event: React$1.MouseEvent) => void;
    type?: Type;
    active?: boolean;
    text?: string;
    icon?: JSX.Element | string;
    iconPlacement?: Placement;
    color?: string;
    colorPicker?: string;
}
declare const Button: (props: IButtonProps) => JSX.Element;

interface IColorPickerProps extends IGlobalProps {
    text?: string;
    icon?: JSX.Element | string;
    color?: string;
    onChange: (color: any) => void;
}
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;

interface IListItemProps extends IGlobalProps {
    ind?: number;
    text?: string;
    icon?: JSX.Element;
    description?: string;
    shortcut?: string;
    items?: IListItemProps[];
    selected?: boolean;
    setSelectedItem?: (item: IListItemProps) => void;
    onClick?: () => void;
}
/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
declare const ListItem: (props: IListItemProps) => JSX.Element;

declare enum DropdownType {
    SELECT = "select",
    CLICK = "click"
}
interface IDropdownProps extends IGlobalProps {
    items: IListItemProps[];
    placement?: Placement;
    dropdownType: DropdownType;
    title?: string;
    selected?: IListItemProps;
    maxItems?: number;
    color?: string;
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

interface IEditableTextProps extends IGlobalProps {
    text?: string;
    placeholder?: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
    backgroundColor?: string;
    size?: Size;
    height?: number;
}
/**
 * Editable Text is used for inline renaming of some text.
 * It appears as normal UI text but transforms into a text input field when the user clicks on or focuses it.
 * @param props
 * @returns
 */
declare const EditableText: (props: IEditableTextProps) => JSX.Element;

interface IIconButtonProps extends IButtonProps {
}
declare const IconButton: (props: IButtonProps) => JSX.Element;

interface IListBoxProps extends IGlobalProps {
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
declare const ListBox: (props: IListBoxProps) => JSX.Element;

declare enum PopupTrigger {
    CLICK = "click",
    HOVER = "hover",
    HOVER_DELAY = "hover_delay"
}
interface IPopupProps extends IGlobalProps {
    text?: string;
    icon?: JSX.Element | string;
    placement?: Placement;
    size?: Size;
    height?: number;
    toggle?: JSX.Element;
    popup: JSX.Element | string;
    trigger?: PopupTrigger;
    isOpen?: boolean;
    setOpen?: (b: boolean) => void;
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

interface IModalProps {
    children: JSX.Element;
    initialIsOpen: boolean;
    title?: string;
    backgroundColor?: string;
}
declare const Modal: (props: IModalProps) => JSX.Element | null;

interface IGroupProps {
    children: any;
    rowGap?: number;
    columnGap?: number;
    width?: number | string;
}
declare const Group: (props: IGroupProps) => JSX.Element;

interface ISliderProps extends IGlobalProps {
    multithumb: boolean;
    min: number;
    max: number;
    initVal?: number;
    initEndVal?: number;
    setVal?: (newVal: number) => void;
    setEndVal?: (newVal: number) => void;
    step?: number;
    minDiff?: number;
    unit?: string;
    onChange?: () => void;
}
declare const Slider: (props: ISliderProps) => JSX.Element;

declare enum ToggleType {
    BUTTON = "button",
    CHECKBOX = "checkbox",
    SWITCH = "switch"
}
interface IToggleProps extends IGlobalProps {
    toggleStatus: boolean;
    onClick?: (event: React$1.MouseEvent) => void;
    toggleType?: ToggleType;
    text?: string;
    icon?: JSX.Element | string;
    iconFalse?: JSX.Element | string;
    iconPlacement?: Placement;
    color?: string;
}
declare const Toggle: (props: IToggleProps) => JSX.Element;

interface IOverlayProps {
    elementMap?: Map<string, JSX.Element>;
}
declare const Overlay: (props: IOverlayProps) => JSX.Element;

export { Borders, Button, ColorPicker, Colors, Dropdown, DropdownType, EditableText, FontSize, Group, IButtonProps, IColorPickerProps, IDropdownProps, IEditableTextProps, IGlobalProps, IGroupProps, IIconButtonProps, IListBoxProps, IListItemProps, ILocation, IModalProps, IOverlayProps, IPopupProps, ISliderProps, IToggleProps, IconButton, IconSizes, ListBox, ListItem, Modal, Overlay, Padding, Placement, Popup, PopupTrigger, Shadows, Size, Slider, Toggle, ToggleType, Type, colorConvert, getFontSize, getHeight, isDark };
