/// <reference types="react" />
import './EditableText.scss';
export interface IEditableTextProps {
    text?: string;
    placeholder?: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
}
export declare const EditableText: (props: IEditableTextProps) => JSX.Element;
