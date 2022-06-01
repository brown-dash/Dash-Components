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
/**
 * Editable Text is used for inline renaming of some text.
 * It appears as normal UI text but transforms into a text input field when the user clicks on or focuses it.
 * @param props
 * @returns
 */
export declare const EditableText: (props: IEditableTextProps) => JSX.Element;
