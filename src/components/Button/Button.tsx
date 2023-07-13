import { Tooltip } from '@mui/material'
import React from 'react'
import { IGlobalProps, Placement, Type } from '../../global'
import { Colors, Size } from '../../global/globalEnums'
import { getFontSize, getHeight, isDark } from '../../global/globalUtils'
import { IconButton } from '../IconButton'
import './Button.scss'

export interface IButtonProps extends IGlobalProps {
  onClick?: (event: React.MouseEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
  type?: Type
  active?: boolean

  // Content
  text?: string
  icon?: JSX.Element | string

  // Additional stylization
  iconPlacement?: Placement
  color?: string
  colorPicker?: string
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
    iconPlacement = 'right',
    size = Size.SMALL,
    color = Colors.MEDIUM_BLUE,
    style,
    tooltip,
    tooltipPlacement = 'top',
    colorPicker,
    formLabel,
    formLabelPlacement,
    fillWidth
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
        if (colorPicker) return colorPicker;
        if (active) return color;
        else return color;
    }
  }

  const getColor = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        if (colorPicker) return colorPicker
        return color;
      case Type.SEC:
        if (colorPicker) return colorPicker
        return color;
      case Type.TERT:
        if (colorPicker) {
          if (isDark(colorPicker)) return Colors.WHITE;
          else return Colors.BLACK
        }
        if (isDark(color)) return Colors.WHITE;
        else return Colors.BLACK
    }
  }

  const getBackground = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        if (colorPicker) return colorPicker
        return color;
      case Type.SEC:
        if (colorPicker) return colorPicker
        return color;
      case Type.TERT:
        if (colorPicker) return colorPicker
        else return color
    }
  }

  const defaultProperties: React.CSSProperties = {
    height: getHeight(height, size),
    minHeight: getHeight(height, size),
    width: fillWidth ? '100%' : 'fit-content',
    padding: fillWidth ? 0 : undefined,
    fontWeight: 500,
    fontSize: getFontSize(size),
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    borderColor: getBorderColor(),
    color: getColor()
  }

  const backgroundProperties: React.CSSProperties = {
    background: getBackground()
  }

  const button: JSX.Element = (
    <Tooltip arrow={true} placement={tooltipPlacement} title={tooltip}>
      <div
        className={`button-container ${type} ${active && 'active'} ${inactive && 'inactive'}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        style={{...defaultProperties, ...style}}
      >
        <div className={`button-content`}>
          {iconPlacement == 'left' ? icon : null}
          {text}
          {iconPlacement == 'right' ? icon : null}
        </div>
        <div className={`background ${active && 'active'}`} style={backgroundProperties}/>
      </div>
    </Tooltip>
  )

  return (
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {button}
      </div>
    :
      button
  )
}
