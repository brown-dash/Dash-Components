import { useState } from 'react'
import React from 'react';
import { Colors, FontSize } from '../../global/globalEnums';
import './Button.scss'
import { Story, Meta } from '@storybook/react';
import { Tooltip } from '@mui/material';

export interface IButtonProps {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  type?: 'outline' | 'gradient' | 'fill' | 'icon'

  // Content
  text?: string
  icon?: JSX.Element | string
  fontSize?: number | string
  tooltip?: string

  // Colors
  backgroundColor?: string
  primaryColor?: string
  secondaryColor?: string
  color?: string

  // Hover style
  hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'none'

  // Label
  hasLabel?: boolean
  label?: string

  // Additional stylization
  padding?: number
  hasRipple?: boolean
  hasBorder?: boolean
  borderRadius?: number
  iconPosition?: 'left' | 'right' | 'top' | 'bottom'
  height?: number
}

export const Button = (props: IButtonProps) => {
  const {
    text,
    icon,
    onClick,
    type,
    backgroundColor,
    color,
    padding,
    borderRadius,
    primaryColor,
    secondaryColor,
    hoverStyle,
    hasRipple,
    hasBorder,
    hasLabel,
    label,
    iconPosition,
    fontSize,
    height,
  } = props
  const [rippleDisplay, setRippleDisplay] = useState<boolean>(false)
  const [rippleOpacity, setRippleOpacity] = useState<number>(1)
  const [rippleSize, setRippleSize] = useState<number>(0)
  const [rippleTop, setRippleTop] = useState<number>(0)
  const [rippleLeft, setRippleLeft] = useState<number>(0)

  const handleRipple = (e: React.MouseEvent) => {
    setRippleDisplay(false)
      setRippleSize(0)
      setRippleOpacity(0)
      const rectEle = e.target as HTMLElement
      const rectBounds = rectEle.getBoundingClientRect()
      const left = rectBounds.left
      const top = rectBounds.top
      const offsetX = (e.clientX - left) - 50
      const offsetY = (e.clientY - top) - 50
      setRippleDisplay(true)
      setRippleOpacity(1)
      setTimeout(() => {
        setRippleSize(1)
      }, 100)
      setRippleTop(offsetY)
      setRippleLeft(offsetX)
      setTimeout(() => {
        setRippleOpacity(0)
        setTimeout(() => {
          setRippleSize(0)
          setRippleDisplay(false)
        }, 300)
      }, 300)
  }

  const rippleHelperElement: JSX.Element = (
    <div
      className="button-ripple"
      style={{
        display: rippleDisplay ? 'block' : 'null',
        top: rippleTop,
        left: rippleLeft,
        transform: `scale(${rippleSize})`,
        opacity: rippleOpacity,
      }}
    />
  )

  /**
   * In the event that there is a single click
   * @param e 
   */
  const handleClick = (e: React.MouseEvent) => {
    if (hasRipple) {
      handleRipple(e)
    }
    onClick && onClick(e)
  }

  const defaultProperties = {
    fontSize: fontSize ? fontSize : undefined,
    borderRadius: borderRadius ? borderRadius : undefined,
    color: color,
    height: height,
    padding: padding,
    border: hasBorder ? `solid 1px ${color}` : undefined
  }

  const gradientProperties: React.CSSProperties = {
    ...defaultProperties
  }

  const iconProperties: React.CSSProperties = {
    ...defaultProperties,
    width: 40,
    padding: 0,
  }

  const fillProperties: React.CSSProperties = {
    ...defaultProperties,
  }

  const getHoverStyle = () => {
    switch (hoverStyle) {
      case 'shadow':
        return 'shadow'
      case 'darken':
        return 'darken'
      case 'lighten':
        return 'lighten'
      default:
        return ''
    }
  }

  const gradientBackground: React.CSSProperties = {
    background: `linear-gradient(${70}deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
  }

  const getBackgroundStyle = (): React.CSSProperties => {
    if (primaryColor && secondaryColor) {
      return gradientBackground
    } else {
      return {
        background: backgroundColor
      }
    }
  }

  const getButtonStyle = (): React.CSSProperties => {
    if (icon && !text) {
      return iconProperties
    }
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
      <div className={`button-container ${getHoverStyle()}`} onClick={handleClick} style={getButtonStyle()}>
        {hasRipple && rippleHelperElement}
        {iconPosition == 'right' ? null : icon}
        {text}
        {iconPosition == 'right' ? icon : null}
        {hasLabel && 
          <div className={'button-label'}>
            {label}
          </div>
        }
        <div 
          className={`button-background`}
          style={getBackgroundStyle()}
        />
      </div>
  )
}
