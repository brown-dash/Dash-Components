import React from 'react';

interface ITextInputProps {
    placeholder?: string;
    value?: string;
    title?: string;
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const TextInput: (props: ITextInputProps) => JSX.Element;

interface IButtonProps {
    text?: string;
    icon?: JSX.Element | string;
    onClick: (event: React.MouseEvent) => void;
    type?: 'outline' | 'gradient' | 'fill';
    primaryColor?: string;
    rounded?: boolean;
    textColor?: string;
    secondaryColor?: string;
    hoverStyle?: 'hover' | 'none';
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    fontSize?: number | string;
    height?: number;
}
declare const Button: (props: IButtonProps) => JSX.Element;

interface IModalProps {
    children: JSX.Element;
    isOpen?: boolean;
    setOpen?: (status: boolean) => void;
    title?: string;
}
declare const Modal: (props: IModalProps) => JSX.Element | null;

interface IColorPickerProps {
    title?: string;
    onChange: (color: any) => void;
}
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;

export { Button, ColorPicker, IButtonProps, IColorPickerProps, IModalProps, ITextInputProps, Modal, TextInput };
