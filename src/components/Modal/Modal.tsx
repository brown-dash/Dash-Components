import { FaTimes } from 'react-icons/fa'
import { Button } from '../Button'
import { useState } from 'react'
import React from 'react';
import './Modal.scss'

export interface IModalProps {
  children: JSX.Element
  isOpen?: boolean
  setOpen?: (status: boolean) => void
  title?: string
}

export const Modal = (props: IModalProps) => {
  const { children, isOpen, setOpen, title } = props
  if (!isOpen) return null
  return (
    <div className="modal-container">
      <div className={'modal-popup'}>
        {title}
        {children}
        <div className={'modal-closeButton'}>
          <Button
            onClick={() => setOpen && setOpen(false)}
            icon={<FaTimes />}
            rounded={true}
          />
        </div>
      </div>
      <div className={'modal-background'} onClick={() => setOpen && setOpen(false)} />
    </div>
  )
}
