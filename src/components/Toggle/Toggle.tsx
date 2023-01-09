import React from 'react'
import { Colors, Size } from '../../global/globalEnums'
import { getFontSize, getHeight } from '../../global/globalUtils'
import { IconButton } from '../IconButton'
import { Button, Type, IButtonProps, OrientationType } from '../Button'
import './Toggle.scss'
import * as bi from 'react-icons/bi'
import { IGlobalProps } from '../../global'

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

  // Additional stylization
  iconPosition?: OrientationType
  color?: string
}

export const Toggle = (props: IToggleProps) => {
  const {
    toggleStatus,
    toggleType = ToggleType.CHECKBOX,
    type = Type.SEC,
    text,
    icon,
    height,
    inactive,
    label,
    iconPosition,
    onPointerDown,
    onClick,
    size = Size.SMALL,
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

  switch(toggleType) {
    case ToggleType.BUTTON:
      return (
        <Button
          text={text}
          icon={icon}
          onClick={handleClick}
          active={toggleStatus}
          type={type}
          size={size}
          iconPosition={iconPosition}
        />
      );
    case ToggleType.CHECKBOX:
      return (
        <IconButton
          icon={
            toggleStatus ? <bi.BiCheck/> : undefined
          }
          onClick={handleClick}
          active={toggleStatus}
          type={type}
          size={size}
        />
      );
    case ToggleType.SWITCH:
    default:
      return (
        <div
          className={`toggle-container ${toggleType}`}
          onPointerDown={onPointerDown}
          onClick={handleClick}
          style={defaultProperties}
        >
          <div className="toggle-content" style={{fontSize: getFontSize(size), width: 2*getHeight(height, size), justifyContent: toggleStatus ? 'flex-end' : 'flex-start'}}>
            <div className="toggle-switch" style={{width: getHeight(height, size), height: getHeight(height, size)}}></div>  
          </div>
          {label && <div className={'toggle-label'}>{label}</div>}
          <div className={`toggle-background ${toggleStatus && 'active'}`}/>
        </div>
      );
  }
}
