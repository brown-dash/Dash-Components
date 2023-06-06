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

  const defaultProperties = {
    height: getHeight(height, size),
    width: getHeight(height, size)
  }

  return (
    <div
      className={`iconButton-container ${type}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{...defaultProperties, ...style}}
    >
      <div className="iconButton-content" style={{fontSize: getFontSize(size, true), color: color, borderColor: color}}>
        {icon}
      </div>
      {label && <div className={'iconButton-label'}>{label}</div>}
      <div className={`iconButton-background ${active && 'active'} ${inactive && 'inactive'}`} style={{background: color}}/>
    </div>
  )
}
