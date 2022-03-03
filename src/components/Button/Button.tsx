import { useState } from 'react'
import React from 'react';
import { Colors } from '../../global/globalEnums';
import './Button.scss'
import { Story, Meta } from '@storybook/react';

export interface IButtonProps {
  text?: string
  icon?: JSX.Element | string
  onClick: (event: React.MouseEvent) => void
  type?: 'outline' | 'gradient' | 'fill'
  primaryColor?: string
  rounded?: boolean
  textColor?: string
  secondaryColor?: string
  hoverStyle?: 'hover' | 'none'
  iconPosition?: 'left' | 'right' | 'top' | 'bottom'
  fontSize?: number | string
  height?: number
}

export const Button = (props: IButtonProps) => {
  const {
    text,
    icon,
    onClick,
    type,
    primaryColor,
    textColor,
    rounded,
    secondaryColor,
    hoverStyle,
    iconPosition,
    fontSize,
    height,
  } = props
  const [rippleDisplay, setRippleDisplay] = useState<boolean>(false)
  const [rippleOpacity, setRippleOpacity] = useState<number>(1)
  const [rippleSize, setRippleSize] = useState<number>(0)
  const [rippleTop, setRippleTop] = useState<number>(0)
  const [rippleLeft, setRippleLeft] = useState<number>(0)

  const click = (e: React.MouseEvent) => {
    // const rectEle = e.target as HTMLElement
    // const rectBounds = rectEle.getBoundingClientRect()
    // const left = rectBounds.left
    // const top = rectBounds.top
    // const offsetX = (e.clientX - left) - 50
    // const offsetY = (e.clientY - top) - 50
    // console.log('offsetX: ' + offsetX, 'offsetY: ' + offsetY)
    // setRippleDisplay(true)
    // setRippleOpacity(1)
    // setTimeout(() => {
    //   setRippleSize(1)
    // }, 100)
    // setRippleTop(offsetY)
    // setRippleLeft(offsetX)
    // setTimeout(() => {
    //   setRippleOpacity(0)
    //   setTimeout(() => {
    //     setRippleSize(0)
    //     setRippleDisplay(false)
    //   }, 300)
    // }, 300)
    onClick(e)
  }

  const ripple: JSX.Element = (
    <div
      className="button-ripple"
      style={{
        display: rippleDisplay ? 'block' : 'none',
        top: rippleTop,
        left: rippleLeft,
        transform: `scale(${rippleSize})`,
        opacity: rippleOpacity,
      }}
    />
  )

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
    }deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
    color: textColor,
    borderRadius: rounded ? 20 : undefined,
    fontSize: fontSize ? fontSize : undefined,
    height: height,
  }

  const iconProperties: React.CSSProperties = {
    height: height ? height : 40,
    width: height ? height : 40,
    padding: 0,
    borderRadius: rounded ? '100%' : undefined,
    fontSize: fontSize ? fontSize : '1.3rem',
    background: primaryColor ? primaryColor : 'black',
    color: textColor,
  }

  const fillProperties: React.CSSProperties = {
    borderRadius: rounded ? 20 : undefined,
    fontSize: fontSize ? fontSize : undefined,
    background: primaryColor ? primaryColor : 'black',
    color: textColor,
    height: height,
  }

  const defaultProperties: React.CSSProperties = {
    borderRadius: rounded ? 20 : undefined,
    width: '100%',
    fontSize: fontSize ? fontSize : undefined,
    background: primaryColor ? primaryColor : Colors.BLACK,
    color: textColor,
    height: height,
    boxShadow: 'none',
  }

  const cssProperties = (): React.CSSProperties => {
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
      default:
        return defaultProperties
    }
  }
  return (
    <div className={'button-container'} onClick={click} style={cssProperties()}>
      {iconPosition == 'right' ? null : icon}
      {text}
      {iconPosition == 'right' ? icon : null}
    </div>
  )
}
