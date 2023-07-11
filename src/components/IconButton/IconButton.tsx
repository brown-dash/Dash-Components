import { Tooltip } from '@mui/material'
import React from 'react'
import { Colors, Size, Type, getFontSize, getHeight, isDark } from '../../global'
import { IButtonProps } from '../Button'
import './IconButton.scss'

export interface IIconButtonProps extends IButtonProps {}

export const IconButton = (props: IButtonProps) => {
  const {
    active,
    icon,
    onClick,
    onDoubleClick,
    inactive,
    type = Type.PRIM,
    color = Colors.MEDIUM_BLUE,
    label,
    height,
    size = Size.SMALL,
    style,
    tooltip,
    tooltipPlacement = 'top',
    colorPicker,
    formLabel,
    formLabelPlacement
  } = props

  /**
   * In the event that there is a single click
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
        return color;
      case Type.SEC:
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
        return color;
      case Type.SEC:
        return color;
      case Type.TERT:
        if (colorPicker) return colorPicker
        else return color
    }
  }

  const defaultProperties: React.CSSProperties = {
    height: getHeight(height, size),
    width: getHeight(height, size),
    fontWeight: 500,
    fontSize: getFontSize(size, true),
    borderColor: getBorderColor(),
    color: getColor()
  }

  const backgroundProperties: React.CSSProperties = {
    background: getBackground()
  }

  const iconButton: JSX.Element = (
    <Tooltip arrow={true} placement={tooltipPlacement} title={tooltip}>
      <div
        className={`iconButton-container ${type} ${inactive && 'inactive'}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        style={{...defaultProperties, ...style}}
      >
        <div className="iconButton-content">
          {icon}
          {colorPicker && type !== (Type.TERT) && <div className={`color`} style={{background: colorPicker, outlineColor: defaultProperties.color}}/>}
        </div>
        {label && <div className={'label'} style={{color: defaultProperties.color}}>{label}</div>}
        <div className={`background ${active && 'active'} ${inactive && 'inactive'}`} style={backgroundProperties}/>
      </div>
    </Tooltip>
  )

  return (
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {iconButton}
      </div>
    :
      iconButton
  )
}
