import { useState } from 'react'
import React from 'react';
import { Colors, FontSize } from '../../global/globalEnums';
import './IconButton.scss'
import { Story, Meta } from '@storybook/react';

export interface IIconButtonProps {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  type?: 'outline' | 'gradient' | 'fill' | 'icon'
  isActive?: boolean

  // Content
  text?: string
  icon?: JSX.Element | string
  fontSize?: number | string
  tooltip?: string

  // Colors
  backgroundColor?: string
  primaryColor?: string
  secondaryColor?: string
  activeColor?: string
  color?: string

  // Hover style
  hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'gray' | 'none'

  // Size
  size?: 'small' | 'medium' | 'large'

  // Label
  hasLabel?: boolean
  label?: string

  // Additional stylization
  padding?: number
  hasBorder?: boolean
  isCircle?: boolean
  borderRadius?: number | string
  iconPosition?: 'left' | 'right' | 'top' | 'bottom'
  height?: number
}

export const IconButton = (props: IIconButtonProps) => {
  const {
    text,
    icon,
    onClick,
    isActive,
    type,
    backgroundColor,
    color,
    padding,
    isCircle,
    borderRadius,
    primaryColor,
    secondaryColor,
    activeColor,
    hoverStyle,
    hasBorder,
    hasLabel,
    label,
    height,
    size
  } = props


  /**
   * In the event that there is a single click
   * @param e 
   */
  const handleClick = (e: React.MouseEvent) => {
    onClick && onClick(e)
  }

  const getHeight = (): number => {
    if (height) return height
    switch(size) {
      case 'small':
        return 30
      case 'medium':
        return 40
      case 'large':
        return 50
    }
    return 40
  }

  const defaultProperties = {
    fontSize: getHeight() - 15,
    borderRadius: isCircle ? '100%' : borderRadius ? borderRadius : undefined,
    color: color,
    height: getHeight(),
    width: getHeight(),
    padding: padding,
    border: hasBorder ? `solid 1px ${color}` : undefined
  }

  const gradientProperties: React.CSSProperties = {
    ...defaultProperties
  }

  const fillProperties: React.CSSProperties = {
    ...defaultProperties,
  }

  const gradientBackground: React.CSSProperties = {
    background: `linear-gradient(${70}deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
  }

  const getBackgroundStyle = (): React.CSSProperties => {
    // handle case where button is active
    if (isActive) {
      if (activeColor) {
        return {
          background: activeColor
        }
      }
      else return  {
        background: Colors.MEDIUM_BLUE
      }
    }

    if (primaryColor && secondaryColor) {
      return gradientBackground
    } else {
      return {
        background: backgroundColor
      }
    }
  }

  const getIconButtonStyle = (): React.CSSProperties => {
    switch (type) {
      case 'fill':
        return fillProperties
      case 'gradient':
        return gradientProperties
      default:
        return defaultProperties
    }
  }

  return (
      <div className={`iconbutton-container ${hoverStyle}`} onClick={handleClick} style={getIconButtonStyle()}>
        <div className={`iconbutton-icon`}>{icon}</div>
        {hasLabel && 
          <div className={'iconbutton-label'}>
            {label}
          </div>
        }
        <div 
          className={`iconbutton-background`}
          style={getBackgroundStyle()}
        />
      </div>
  )
}
