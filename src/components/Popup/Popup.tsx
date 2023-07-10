import React, { useRef, useState } from 'react'
import { IGlobalProps, Size } from '../../global'
import { Type } from '../Button'
import { Toggle, ToggleType } from '../Toggle'
import './Popup.scss'
import { Tooltip } from '@mui/material'
import { createPopper } from '@popperjs/core'

export enum PopupTrigger {
  CLICK = "click",
  HOVER = "hover",
  HOVER_DELAY = "hover_delay"
}

export interface IPopupProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  location?: 'left' | 'right' | 'below' | 'above'
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
    trigger = PopupTrigger.CLICK
  } = props
  
  const toggleRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  
  const { styles, attributes } = usePopper(toggleRef, popupRef, {
    modifiers: [],
  });

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const repositionPopup = async () => {
    // if (toggleRef.current) {
    //   const boundingBox = toggleRef.current.getBoundingClientRect();
    //   setTop(boundingBox.y);
    //   setLeft(boundingBox.x);
    //   setHeight(boundingBox.height);
    //   setWidth(boundingBox.width);
    // }
  }

  let timeout = setTimeout(() => {});


  // const closeIfNotPopup = (e: any) => {
  //   setOpen(false);
  // }

  // document.addEventListener('click', closeIfNotPopup)


  return (
    <div className={`popup-wrapper`}>
      <div className="popup-overlay">
          <div className="popup" id="popup" ref={popupRef} style={{
            top: height,
            left: 0,
          }}
          onPointerEnter={() => {
            if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
              clearTimeout(timeout);
              setOpen(true);
            }
          }}
          onPointerLeave={() => {
            if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
              setOpen(false)
            }
          }}
          >
            {popup}
          </div>
      </div>}
      <div
        className="popup-container"
        ref={toggleRef}
        onPointerEnter={() => {
          if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
            repositionPopup()
            setOpen(true)
          }
        }}
        onPointerLeave={() => {
          if (trigger === PopupTrigger.HOVER || trigger === PopupTrigger.HOVER_DELAY) {
            timeout = setTimeout(() => setOpen(false), 1000);
          }
        }}
      >
        {toggle ? 
            <div className={`customToggle-container`} onClick={() => {
              if (trigger === PopupTrigger.CLICK) {
                repositionPopup()
                setOpen(!isOpen)
              }
            }}>
              {toggle}
            </div>
        :
          <Toggle
            tooltip={tooltip}
            size={size}
            type={Type.PRIM}
            toggleType={ToggleType.BUTTON}
            toggleStatus={isOpen}
            icon={icon}
            text={text}
            onClick={() => {
              if (trigger === PopupTrigger.CLICK) {
                repositionPopup()
                setOpen(!isOpen)
              }
            }}
          />
        }
      </div>
    </div>
  )
}
function usePopper(referenceElement: any, popperElement: any, arg2: { modifiers: { name: string; options: { element: any } }[] }): { styles: any; attributes: any } {
  throw new Error('Function not implemented.')
}

