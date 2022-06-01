/// <reference types="react" />
import './Modal.scss';
export interface IModalProps {
    children: JSX.Element;
    initialIsOpen: boolean;
    title?: string;
    backgroundColor?: string;
}
export declare const Modal: (props: IModalProps) => JSX.Element | null;
