import { useState } from 'react'
import React from 'react'
import { Colors, FontSize, Size } from '../../global/globalEnums'
import './IconButton.scss'
import { Story, Meta } from '@storybook/react'
import { getFontSize, getHeight } from '../../global'
import { ButtonType, IButtonProps } from '../Button'

export interface IIconButtonProps extends IButtonProps {}

export const IconButton = (props: IButtonProps) => {
  const {
    active,
    icon,
    onClick,
    onDoubleClick,
    inactive,
    type = ButtonType.PRIM,
    color,
    label,
    height,
    size = Size.SMALL,
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
      style={defaultProperties}
    >
      <div className="iconButton-content" style={{fontSize: getFontSize(size, true)}}>
        {icon}
      </div>
      {label && <div className={'iconButton-label'}>{label}</div>}
      <div className={`iconButton-background ${active && 'active'}`}/>
    </div>
  )
}
