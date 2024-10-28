import { Tooltip } from '@mui/material'
import React from 'react'
import { Colors, Size, Type, getFontSize, getHeight, isDark, getFormLabelSize } from '../../global'
import { IButtonProps } from '../Button'
import './IconButton.scss'

export interface IIconButtonProps extends IButtonProps {}

export const IconButton = (props: IButtonProps) => {
  const {
    active,
    icon,
    onClick,
    onDoubleClick,
    onPointerDown,
    inactive,
    type = Type.PRIM,
    color = Colors.MEDIUM_BLUE,
    background,
    label,
    height,
    size = Size.SMALL,
    style,
    tooltip,
    tooltipPlacement = 'top',
    colorPicker,
    formLabel,
    formLabelPlacement,
    hideLabel,
    fillWidth
  } = props

  /**
   * Pointer down
   * @param e
   */
  const handlePointerDown = (e: React.PointerEvent) => {
    
    if (!inactive && onPointerDown) {
      e.stopPropagation();
      e.preventDefault();
      onPointerDown(e)
    }
  }

  /**
   * In the event that there is a single click
   * @param e
   */
  const handleClick = (e: React.MouseEvent) => {
    if (!inactive && onClick) {
      e.stopPropagation();
      e.preventDefault();
      onClick(e)
    } 
  }

  /**
   * Double click
   * @param e
   */
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!inactive && onDoubleClick){
      e.stopPropagation();
      e.preventDefault();
      onDoubleClick(e)
    } 
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
    if (color && background) return color;
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
    if(background) return background;
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
    width: fillWidth ? '100%' : getHeight(height, size),
    minWidth: getHeight(height, size),
    fontWeight: 500,
    fontSize: getFontSize(size, true),
    borderColor: getBorderColor(),
    color: getColor()
  }

  const backgroundProperties: React.CSSProperties = {
    background: getBackground()
  }

  const iconButton: JSX.Element = (
    <Tooltip disableInteractive={true} arrow={true} placement={tooltipPlacement} title={tooltip}>
      <div
        className={`iconButton-container ${type} ${inactive && 'inactive'}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        style={{...defaultProperties, ...style}}
        tabIndex={-1}
      >
        <div className="iconButton-content">
          {icon}
          {colorPicker && type !== (Type.TERT) && <div className={`color`} style={{background: colorPicker, outlineColor: defaultProperties.color}}/>}
          {label && !hideLabel && <div className={'iconButton-label'} style={{color: defaultProperties.color}}>{label}</div>}
        </div>
        <div className={`background ${active && 'active'} ${inactive && 'inactive'}`} style={backgroundProperties}/>
      </div>
    </Tooltip>
  )

  return (
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}
style={{ width: fillWidth ? '100%' : undefined}}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {iconButton}
      </div>
    :
      iconButton
  )
}
