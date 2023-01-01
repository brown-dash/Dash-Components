import React from 'react'
import { Colors, Size } from '../../global/globalEnums'
import { getFontSize, getHeight } from '../../global/globalUtils'
import { IconButton } from '../IconButton'
import './Button.scss'

export enum ButtonType {
  PRIM = "primary",
  SEC = "secondary",
  TERT = "tertiary",
}

export enum OrientationType {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom"
}

export interface IButtonProps {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  type?: ButtonType
  inactive?: boolean

  // Content
  text?: string
  icon?: JSX.Element | string
  tooltip?: string

  // Size
  size?: Size
  height?: number

  // Label
  label?: string

  // Additional stylization
  iconPosition?: OrientationType
  color?: string
}

export const Button = (props: IButtonProps) => {
  const {
    text,
    icon,
    onClick,
    onDoubleClick,
    height,
    inactive,
    type = ButtonType.PRIM,
    label,
    iconPosition,
    size = Size.SMALL,
  } = props

  if (!text) {
    return <IconButton {...props}/>
  }

  /**
   * Single click
   * @param e
   */
  const handleClick = (e: React.MouseEvent) => {
    if (!inactive && onClick) onClick(e)
  }

  /**
   * Double click
   * @param e
   */
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!inactive && onDoubleClick) onDoubleClick(e)
  }

  const defaultProperties = {
    height: getHeight(height, size),
  }


  return (
    <div
      className={`button-container ${type}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={defaultProperties}
    >
      <div className="button-content" style={{fontSize: getFontSize(size)}}>
        {iconPosition == 'right' ? null : icon}
        {text}
        {iconPosition == 'right' ? icon : null}
      </div>
      {label && <div className={'button-label'}>{label}</div>}
      <div className={`button-background`}/>
    </div>
  )
}
