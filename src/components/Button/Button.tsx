import { useState } from 'react'
import React from 'react';
import { Colors, FontSize } from '../../global/globalEnums';
import './Button.scss'
import { Story, Meta } from '@storybook/react';

export interface IButtonProps {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  type?: 'outline' | 'gradient' | 'fill' | 'icon'

  // Content
  text?: string
  icon?: JSX.Element | string
  fontSize?: number | string

  // Colors
  primaryColor?: string
  secondaryColor?: string
  color?: string

  // Hover style
  hoverStyle?: 'shadow' | 'darken' | 'lighten' | 'none'

  // Additional stylization
  isRipple?: boolean
  rounded?: boolean
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
    primaryColor,
    color,
    rounded,
    borderRadius,
    secondaryColor,
    hoverStyle,
    isRipple,
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
    if (isRipple) {
      handleRipple(e)
    }
    onClick && onClick(e)
  }

  const outlineProperties: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: primaryColor,
    border: `solid 2px ${primaryColor}`,
    borderRadius: rounded ? 20 : undefined,
    fontSize: fontSize ? fontSize : undefined,
    height: height,
  }

  const gradientProperties: React.CSSProperties = {
    background: `linear-gradient(${
      Math.random() * 360
    } deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
    color: color,
    borderRadius: rounded ? 20 : undefined,
    fontSize: fontSize ? fontSize : undefined,
    height: height,
  }

  const iconProperties: React.CSSProperties = {
    height: height ? height : 40,
    width: height ? height : 40,
    padding: 0,
    borderRadius: rounded ? '100%' : borderRadius ? borderRadius : undefined,
    fontSize: fontSize ? fontSize : FontSize.HEADER,
    background: primaryColor ? primaryColor : 'transparent',
    color: color,
  }

  const fillProperties: React.CSSProperties = {
    borderRadius: rounded ? 20 : undefined,
    fontSize: fontSize ? fontSize : undefined,
    background: primaryColor ? primaryColor : 'black',
    color: color,
    height: height,
  }

  const defaultProperties: React.CSSProperties = {
    borderRadius: rounded ? 20 : undefined,
    fontSize: fontSize ? fontSize : undefined,
    background: primaryColor ? primaryColor : Colors.BLACK,
    color: color,
    height: height,
    boxShadow: 'none',
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

  const getCssProperties = (): React.CSSProperties => {
    if (icon && !text) {
      return iconProperties
    }
    switch (type) {
      case 'fill':
        return fillProperties
      case 'gradient':
        return gradientProperties
      case 'outline':
        return outlineProperties
      case 'icon':
        return iconProperties
      default:
        return defaultProperties
    }
  }
  return (
    <div className={`button-container ${getHoverStyle()}`} onClick={handleClick} style={getCssProperties()}>
      {isRipple && rippleHelperElement}
      {iconPosition == 'right' ? null : icon}
      {text}
      {iconPosition == 'right' ? icon : null}
    </div>
  )
}
