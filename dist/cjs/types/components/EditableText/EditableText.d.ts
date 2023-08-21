/// <reference types="react" />
import { IGlobalProps, Size, TextAlignment } from '../../global';
import './EditableText.scss';
export interface IEditableTextProps extends IGlobalProps {
    val?: string | number;
    setVal?: (newText: string | number) => unknown;
    onEnter?: (newText: string | number) => unknown;
    setEditing?: (bool: boolean) => unknown;
    placeholder?: string;
    editing?: boolean;
    size?: Size;
    height?: number;
    multiline?: boolean;
    textAlign?: TextAlignment;
    password?: boolean;
}
/**
 * Editable Text is used for inline renaming of some text.
 * It appears as normal UI text but transforms into a text input field when the user clicks on or focuses it.
 * @param props
 * @returns
 */
export declare const EditableText: (props: IEditableTextProps) => JSX.Element;
