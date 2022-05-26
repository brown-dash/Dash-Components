import React from 'react';
import { Colors, Size } from '../../global/globalEnums';
import './Button.scss';

export interface IButtonProps {
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
  size?: Size

  // Label
  hasLabel?: boolean
  label?: string

  // Additional stylization
  padding?: number
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
    isActive,
    type,
    backgroundColor,
    color,
    padding,
    borderRadius,
    primaryColor,
    secondaryColor,
    activeColor,
    hoverStyle,
    hasBorder,
    hasLabel,
    label,
    iconPosition,
    fontSize,
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

  const getHeight = () => {
    if (height) return height
    switch(size) {
      case Size.SMALL:
        return 30
      case Size.MEDIUM:
        return 40
      case Size.LARGE:
        return 50
    }
  }

  const defaultProperties = {
    fontSize: fontSize ? fontSize : undefined,
    borderRadius: borderRadius ? borderRadius : undefined,
    color: color,
    height: getHeight(),
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

  const getButtonStyle = (): React.CSSProperties => {
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
      <div className={`button-container ${hoverStyle}`} onClick={handleClick} style={getButtonStyle()}>
        <div className='button-content'>
          {iconPosition == 'right' ? null : icon}
            {text}
          {iconPosition == 'right' ? icon : null}
        </div>
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
