import React, { useRef, useState } from 'react'
import { Colors, IGlobalProps, Placement, Size , getFormLabelSize, isDark } from '../../global'
import { Toggle, ToggleType } from '../Toggle'
import './Popup.scss'
import { ClickAwayListener, Popper } from '@mui/material'

export enum PopupTrigger {
  CLICK = "click",
  HOVER = "hover",
  HOVER_DELAY = "hover_delay"
}

export interface IPopupProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string,
  iconPlacement?: Placement,
  placement?: Placement,
  size?: Size
  height?: number
  toggle?: JSX.Element;
  popup: JSX.Element | string
  trigger?: PopupTrigger
  isOpen?: boolean;
  setOpen?: (b: boolean) => void;
  background?: string
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
    color,
    isOpen = locIsOpen,
    setOpen = locSetOpen,
    toggle,
    tooltip,
    trigger = PopupTrigger.CLICK,
    placement = 'bottom-start',
    width,
    height,
    fillWidth,
    iconPlacement = 'left',
    background = isDark(color) ? Colors.LIGHT_GRAY : Colors.DARK_GRAY
  } = props
  
  const triggerRef = useRef(null);

  let timeout = setTimeout(() => {});

  const handleClickAway = () => {
    setOpen(false);
  }

  return (
    <div className={`popup-wrapper ${fillWidth && 'fillWidth'}`}>
      <div
        className={`trigger-container ${fillWidth && 'fillWidth'}`}
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
          color={color}
          toggleType={ToggleType.BUTTON}
          toggleStatus={isOpen}
          icon={icon}
          iconPlacement={iconPlacement}
          text={text}
          onClick={() => {
            if (trigger === PopupTrigger.CLICK) {
              setOpen(!isOpen)
            }
          }}
          fillWidth={fillWidth}
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
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={`popup-container`}
            style={{width: width, height: height, background: background}}
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
        </ClickAwayListener>
      </Popper>
    </div>
  )
}

