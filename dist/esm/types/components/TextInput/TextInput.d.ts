import React from 'react';
import './TextInput.scss';
export interface ITextInputProps {
    placeholder?: string;
    value?: string;
    title?: string;
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextInput: (props: ITextInputProps) => JSX.Element;
