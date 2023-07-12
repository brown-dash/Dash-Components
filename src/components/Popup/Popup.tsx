import React, { useRef, useState } from 'react'
import { IGlobalProps, Placement, Size } from '../../global'
import { Toggle, ToggleType } from '../Toggle'
import './Popup.scss'
import { Popper } from '@mui/material'

export enum PopupTrigger {
  CLICK = "click",
  HOVER = "hover",
  HOVER_DELAY = "hover_delay"
}

export interface IPopupProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  placement?: Placement
  size?: Size
  height?: number
  toggle?: JSX.Element;
  popup: JSX.Element | string
  trigger?: PopupTrigger
  isOpen?: boolean;
  setOpen?: (b: boolean) => void
}

/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const Popup = (props: IPopupProps) => {
  
  const [locIsOpen, locSetOpen] = useState<boolean>(false)

  const {
    text,
    size,
    icon,
    popup,
    type,
    isOpen = locIsOpen,
    setOpen = locSetOpen,
    toggle,
    tooltip,
    trigger = PopupTrigger.CLICK,
    placement = 'bottom-start',
    width,
    height
  } = props
  
  const triggerRef = useRef(null);

  let timeout = setTimeout(() => {});

  return (
    <div className={`popup-wrapper`}>
      <div
        className={`trigger-container ${toggle && 'custom'}`}
        ref={triggerRef}
        onClick={() => {
          if (trigger === PopupTrigger.CLICK) setOpen (!isOpen)
        }}
        onPointerEnter={() => {
          if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
            clearTimeout(timeout);
            setOpen(true)
          }
        }}
        onPointerLeave={() => {
          if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
            timeout = setTimeout(() => setOpen(false), 1000);
          }
        }}
      >
        {toggle 
      ?
        toggle 
      :
        <Toggle
          tooltip={tooltip}
          size={size}
          type={type}
          toggleType={ToggleType.BUTTON}
          toggleStatus={isOpen}
          icon={icon}
          text={text}
          onClick={() => {
            if (trigger === PopupTrigger.CLICK) {
              setOpen(!isOpen)
            }
          }}
        />
        }
      </div>
      <Popper 
        open={isOpen} 
        style={{zIndex: 20000}}
        anchorEl={triggerRef.current} 
        placement={placement}
        modifiers={[
        ]}
      >
        <div className={`popup-container`}
          style={{width: width, height: height}}
          onPointerEnter={() => {
            if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
              clearTimeout(timeout);
              setOpen(true);
            }
          }}
          onPointerLeave={() => {
            if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
              timeout = setTimeout(() => setOpen(false), 200);
            }
          }}
        >
          {popup}
        </div>
      </Popper>
    </div>
  )
}

