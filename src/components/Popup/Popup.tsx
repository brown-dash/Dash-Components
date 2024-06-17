import React, { useEffect, useRef, useState } from 'react'
import { Colors, IGlobalProps, Placement, Size , getFormLabelSize, isDark } from '../../global'
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
  icon?: JSX.Element | string,
  iconPlacement?: Placement,
  placement?: Placement,
  size?: Size
  height?: number
  toggle?: JSX.Element;
  popup: JSX.Element | string | (() => JSX.Element)
  trigger?: PopupTrigger
  toggleStatus?: boolean;
  isOpen?: boolean;
  setOpen?: (b: boolean) => void;
  background?: string,
  isToggle?: boolean;
  toggleFunc?: () => void;
  popupContainsPt?: (x:number, y:number) => boolean
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
  
  React.useEffect(
    () => {
      window.addEventListener("pointerdown", handlePointerAwayDown, {capture:true});
      return () => {
        window.removeEventListener("pointerdown", handlePointerAwayDown, {capture:true});
      }
    },
    [props]
  )
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
  const popperRef = useRef(null);

  let timeout = setTimeout(() => {});

  const handlePointerAwayDown = (e: PointerEvent) => {
    const rect = (popperRef.current as any)?.getBoundingClientRect();
    if (rect && !(rect.left < e.clientX && rect.top < e.clientY && rect.right > e.clientX && rect.bottom > e.clientY) &&
        !props.popupContainsPt?.(e.clientX, e.clientY)) {
      e.stopPropagation();
      e.preventDefault();
      setOpen(false);
    }
  }

  useEffect(() => window.addEventListener("pointerdown", handlePointerAwayDown, {capture:true}), [isOpen])
  
  return (
    <div className={`popup-wrapper ${fillWidth && 'fillWidth'}`} >
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
          background={props.isToggle ? undefined : background}
          toggleType={ToggleType.BUTTON}
          icon={icon}
          iconPlacement={iconPlacement}
          text={text}
          label={props.label}
          toggleStatus={isOpen || props.toggleStatus}
          onClick={() => {
            if (trigger === PopupTrigger.CLICK) {
              if (!props.isToggle || props.toggleStatus) {
                  setOpen(!isOpen)
              }
              props.toggleFunc?.();
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
          <div className={`popup-container`}  ref={popperRef}
            style={{width, height, background}}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
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
            {!isOpen ? (null): typeof popup === 'function' ? popup() : popup}
          </div>
      </Popper>
    </div>
  )
}

