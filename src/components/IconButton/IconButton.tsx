import { useState } from 'react'
import React from 'react'
import { Colors, FontSize, Size } from '../../global/globalEnums'
import './IconButton.scss'
import { Story, Meta } from '@storybook/react'
import { getFontSize, getHeight } from '../../global'
import { Type, IButtonProps } from '../Button'

export interface IIconButtonProps extends IButtonProps {}

export const IconButton = (props: IButtonProps) => {
  const {
    active,
    icon,
    onClick,
    onDoubleClick,
    inactive,
    type = Type.PRIM,
    color,
    label,
    height,
    size = Size.SMALL,
    style
  } = props

  /**
   * In the event that there is a single click
   * @param e
   */
  const handleClick = (e: React.MouseEvent) => {
    onClick && onClick(e)
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
    width: getHeight(height, size),
    fontWeight: 500,
    fontSize: getFontSize(size, true),
    borderColor: getBorderColor(),
    color: type == (Type.TERT) ? active ? color : Colors.WHITE : color
  }

  const backgroundProperties: React.CSSProperties = {
    background: type == (Type.TERT) && active ? Colors.WHITE : color
  }

  return (
    <div
      className={`iconButton-container ${type}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{...defaultProperties, ...style}}
    >
      <div className="iconButton-content">
        {icon}
      </div>
      {label && <div className={'iconButton-label'}>{label}</div>}
      <div className={`iconButton-background ${active && 'active'} ${inactive && 'inactive'}`} style={backgroundProperties}/>
    </div>
  )
}
