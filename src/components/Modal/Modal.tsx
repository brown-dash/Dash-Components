import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Colors, Size } from '../../global';
import { Type } from '../Button';
import { IconButton } from '../IconButton';
import './Modal.scss';

export interface IModalProps {
  children: JSX.Element
  initialIsOpen: boolean
  title?: string
  backgroundColor?: string
}

export const Modal = (props: IModalProps) => {
  const { children, initialIsOpen, title, backgroundColor } = props

  const [ isOpen, setIsOpen ] = useState<boolean>(initialIsOpen)
  
  if (!isOpen) return null
  return (
    <div className="modal-container">
      <div className={'modal-popup'} style={{backgroundColor: backgroundColor ? backgroundColor : Colors.WHITE}}>
        {children}
        <div className={'modal-closeButton'}>
          <IconButton
            size={Size.SMALL}
            type={Type.TERT}
            onClick={() => setIsOpen(false)}
            icon={<FaTimes />}
          />
        </div>
      </div>
      <div className={'modal-background'} onClick={() => setIsOpen(false)} />
    </div>
  )
}
