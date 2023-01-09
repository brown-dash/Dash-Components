import React, { useRef, useState } from 'react'
import { IGlobalProps, Size } from '../../global'
import { Type } from '../Button'
import { Toggle, ToggleType } from '../Toggle'
import './Popup.scss'

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
  const {
    text,
    size,
    icon,
    popup,
    type,
    toggle,
    trigger = PopupTrigger.CLICK
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const toggleRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const repositionPopup = () => {
    if (toggleRef.current) {
      const boundingBox = toggleRef.current.getBoundingClientRect();
      setTop(boundingBox.y);
      setLeft(boundingBox.x);
      setHeight(boundingBox.height);
      setWidth(boundingBox.width);
    }
  }

  let timeout = setTimeout(() => {});


  // const closeIfNotPopup = (e: any) => {
  //   setOpen(false);
  // }

  // document.addEventListener('click', closeIfNotPopup)

  return (
    <div>
      {isOpen && <div className="popup-overlay">
          <div className="popup" id="popup" style={{
            top: top + height,
            left: left,
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
          <div onClick={() => {
            if (trigger === PopupTrigger.CLICK) {
              repositionPopup()
              setOpen(!isOpen)
            }
          }}>
          {toggle}
        </div>
        :
          <Toggle
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
