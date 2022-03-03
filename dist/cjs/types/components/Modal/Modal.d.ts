/// <reference types="react" />
import './Modal.scss';
export interface IModalProps {
    children: JSX.Element;
    isOpen?: boolean;
    setOpen?: (status: boolean) => void;
    title?: string;
}
export declare const Modal: (props: IModalProps) => JSX.Element | null;
