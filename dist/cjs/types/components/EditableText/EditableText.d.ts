/// <reference types="react" />
import { Size } from '../../global';
import './EditableText.scss';
export interface IEditableTextProps {
    text?: string;
    placeholder?: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
    backgroundColor?: string;
    size?: Size;
    height?: number;
}
export declare const EditableText: (props: IEditableTextProps) => JSX.Element;
