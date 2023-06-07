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
    color,
    style
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

  const getBorderColor = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        return undefined;
      case Type.SEC:
        return color;
      case Type.TERT:
        if (active) return color;
        else return color;
    }
  }

  const defaultProperties: React.CSSProperties = {
    height: getHeight(height, size),
    fontWeight: 500,
    fontSize: getFontSize(size),
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    borderColor: getBorderColor(),
    color: type == (Type.TERT) ? active ? color : Colors.WHITE : color
  }

  const backgroundProperties: React.CSSProperties = {
    background: type == (Type.TERT) && active ? Colors.WHITE : color
  }


  return (
    <div
      className={`button-container ${type} ${active && 'active'}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{...defaultProperties, ...style}}
    >
      <div className={`button-content`}>
        {iconPosition == 'right' ? null : icon}
        {text}
        {iconPosition == 'right' ? icon : null}
      </div>
      {label && <div className={'button-label'}>{label}</div>}
      <div className={`button-background ${active && 'active'}`} style={backgroundProperties}/>
    </div>
  )
}
