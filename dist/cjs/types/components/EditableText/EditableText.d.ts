/// <reference types="react" />
import { Size } from '../../global/globalEnums';
import './EditableText.scss';
export interface IEditableTextProps {
    text?: string;
    placeholder?: string;
    editing: boolean;
    onEdit: (newText: string) => void;
    setEditing: (editing: boolean) => void;
    backgroundColor?: string;
    size?: Size;
    height?: number | string;
}
export declare const EditableText: (props: IEditableTextProps) => JSX.Element;
