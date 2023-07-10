import { Tooltip } from '@mui/material'
import React from 'react'
import { getFontSize, getHeight, isDark } from '../../global'
import { Colors, Size } from '../../global/globalEnums'
import { IButtonProps, Type } from '../Button'
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
    tooltipPlacement = 'top'
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

  const getBorderColor = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        return undefined;
      case Type.SEC:
        return color;
      case Type.TERT:
        if (active) return color;
        else return color;
    }
  }

  const defaultProperties: React.CSSProperties = {
    height: getHeight(height, size),
    width: getHeight(height, size),
    fontWeight: 500,
    fontSize: getFontSize(size, true),
    borderColor: getBorderColor(),
    color: type == (Type.TERT) ? isDark(color) ? Colors.WHITE : Colors.BLACK : color
  }

  const backgroundProperties: React.CSSProperties = {
    background: color
  }

  return (
    <Tooltip arrow={true} placement={tooltipPlacement} title={tooltip}>
      <div
        className={`iconButton-container ${type} ${inactive && 'inactive'}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        style={{...defaultProperties, ...style}}
      >
        <div className="content">
          {icon}
        </div>
        {label && <div className={'label'} style={{color: defaultProperties.color}}>{label}</div>}
        <div className={`background ${active && 'active'} ${inactive && 'inactive'}`} style={backgroundProperties}/>
      </div>
    </Tooltip>
  )
}
