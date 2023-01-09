import React from 'react'
import { IGlobalProps } from '../../global'
import { Colors, Size } from '../../global/globalEnums'
import { getFontSize, getHeight } from '../../global/globalUtils'
import { IconButton } from '../IconButton'
import './Button.scss'

export enum Type {
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

export interface IButtonProps extends IGlobalProps {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  type?: Type
  active?: boolean

  // Content
  text?: string
  icon?: JSX.Element | string

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
    active,
    height,
    inactive,
    type = Type.PRIM,
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
      <div className={`button-background ${active && 'active'}`}/>
    </div>
  )
}
