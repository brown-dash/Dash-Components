/// <reference types="react" />
import './EditableText.scss';
interface IEditableTextProps {
    text: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
}
export declare const EditableText: (props: IEditableTextProps) => JSX.Element;
export {};
