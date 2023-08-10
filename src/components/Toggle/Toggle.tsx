import { Tooltip } from '@mui/material'
import React, { useState } from 'react'
import * as bi from 'react-icons/bi'
import { IGlobalProps, Placement, Type , getFormLabelSize } from '../../global'
import { Size } from '../../global/globalEnums'
import { getFontSize, getHeight } from '../../global/globalUtils'
import { Button, IButtonProps } from '../Button'
import { IconButton } from '../IconButton'
import './Toggle.scss'

export enum ToggleType {
  BUTTON = "button",
  CHECKBOX = "checkbox",
  SWITCH = "switch",
}

export interface IToggleProps extends IButtonProps {
  toggleStatus?: boolean // true -> selected, false -> unselected
  toggleType?: ToggleType
  iconFalse?: JSX.Element | string
}

export const Toggle = (props: IToggleProps) => {
  const [toggleStatusLoc, setToggleStatusLoc] = useState<boolean>(true);
  const {
    toggleStatus = toggleStatusLoc,
    toggleType = ToggleType.CHECKBOX,
    type = Type.SEC,
    style,
    color,
    text,
    icon,
    iconFalse = icon,
    height,
    inactive,
    label,
    iconPlacement,
    onPointerDown,
    onClick,
    tooltip,
    tooltipPlacement = 'top',
    size = Size.SMALL,
    formLabel,
    formLabelPlacement,
    fillWidth,
    align
  } = props

  /**
   * Pointer down
   * @param e
   */
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!inactive && onPointerDown){
      e.stopPropagation();
      e.preventDefault();
      onPointerDown(e)
    } 
  }

  /**
   * Single click
   * @param e
   */
  const handleClick = (e: React.MouseEvent) => {
    if (toggleStatus === toggleStatusLoc) {
      setToggleStatusLoc(!toggleStatus)
    }
    
    if (!inactive && onClick) {
      e.stopPropagation();
      e.preventDefault();
      onClick(e);
    } 
  }

  const defaultProperties = {
    height: getHeight(height, size),
    borderColor: color
  }

  let toggleElement: JSX.Element;

  switch(toggleType) {
    case ToggleType.BUTTON:
      toggleElement = (
        <Button
          text={text}
          tooltip={tooltip}
          icon={toggleStatus ? icon : iconFalse}
          onPointerDown={handlePointerDown}
          onClick={handleClick}
          active={toggleStatus}
          type={type}
          size={size}
          iconPlacement={iconPlacement}
          color={color}
          label={label}
          fillWidth={fillWidth}
          align={align}
        />
      );
      break;
    case ToggleType.CHECKBOX:
      toggleElement = (
        <IconButton
          icon={
            toggleStatus ? <bi.BiCheck/> : undefined
          }
          tooltip={tooltip}
          onPointerDown={handlePointerDown}
          onClick={handleClick}
          active={toggleStatus}
          type={type}
          size={size}
          color={color}
          label={label}
          fillWidth={fillWidth}
          align={align}
        />
      );
      break;
    case ToggleType.SWITCH:
    default:
      toggleElement =  (
        <Tooltip disableInteractive={true} arrow={true} placement={tooltipPlacement} title={tooltip}>
          <div
            className={`toggle-container ${toggleType}`}
            onPointerDown={handlePointerDown}
            onClick={handleClick}
            style={{
              width: 2*getHeight(height, size),
              ...defaultProperties
            }}
          >
            <div className="toggle-content" style={{
              fontSize: getFontSize(size), 
              borderColor: color, 
              left: toggleStatus ? '0%' : `calc(100% - ${getHeight(height, size)}px)`
            }}>
              <div className="toggle-switch" style={{
                width: getHeight(height, size), 
                height: getHeight(height, size),
                background: color
              }}></div>  
            </div>
            <div className={`toggle-background ${toggleStatus && 'active'}`}
              style={{ background: color }}
            />
          </div>
        </Tooltip>
      );
      break;
  }


  return (
    formLabel ? 
    <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {toggleElement}
    </div>
    :
    toggleElement
  )
}
