import { Tooltip } from '@mui/material'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IGlobalProps, Placement, Type } from '../../global'
import { Size } from '../../global/globalEnums'
import { getFontSize, getHeight } from '../../global/globalUtils'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import './Toggle.scss'

export enum ToggleType {
  BUTTON = "button",
  CHECKBOX = "checkbox",
  SWITCH = "switch",
}

export interface IToggleProps extends IGlobalProps {
  toggleStatus: boolean // true -> selected, false -> unselected
  onClick?: (event: React.MouseEvent) => void
  toggleType?: ToggleType

  // Content
  text?: string
  icon?: JSX.Element | string
  iconFalse?: JSX.Element | string


  // Additional stylization
  iconPlacement?: Placement
  color?: string
}

export const Toggle = (props: IToggleProps) => {
  const {
    toggleStatus,
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
    formLabelPlacement
  } = props

  /**
   * Single click
   * @param e
   */
  const handleClick = (e: React.MouseEvent) => {
    if (!inactive && onClick) onClick(e);
  }

  const defaultProperties = {
    height: getHeight(height, size),
  }

  let toggleElement: JSX.Element;

  switch(toggleType) {
    case ToggleType.BUTTON:
      toggleElement = (
        <Button
          text={text}
          tooltip={tooltip}
          icon={toggleStatus ? icon : iconFalse}
          onClick={handleClick}
          active={toggleStatus}
          type={type}
          size={size}
          iconPlacement={iconPlacement}
          color={color}
          label={label}
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
          onClick={handleClick}
          active={toggleStatus}
          type={type}
          size={size}
          color={color}
          label={label}
        />
      );
      break;
    case ToggleType.SWITCH:
    default:
      toggleElement =  (
        <Tooltip arrow={true} placement={tooltipPlacement} title={tooltip}>
          <div
            className={`toggle-container ${toggleType}`}
            onPointerDown={onPointerDown}
            onClick={handleClick}
            style={defaultProperties}
          >
            <div className="toggle-content" style={{fontSize: getFontSize(size), width: 2*getHeight(height, size), justifyContent: toggleStatus ? 'flex-end' : 'flex-start'}}>
              <div className="toggle-switch" style={{width: getHeight(height, size), height: getHeight(height, size)}}></div>  
            </div>
            <div className={`toggle-background ${toggleStatus && 'active'}`}/>
          </div>
        </Tooltip>
      );
      break;
  }


  return (
    formLabel ? 
    <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {toggleElement}
    </div>
    :
    toggleElement
  )
}
