import React from 'react'
import './Group.scss'
import { Colors, IGlobalProps, getFontSize, isDark , getFormLabelSize } from '../../global';

export interface IGroupProps extends IGlobalProps {
  children: any
  rowGap?: number;
  columnGap?: number;
  padding?: number | string;
}

export const Group = (props: IGroupProps) => {
  const { 
    children, 
    width = '100%',
    rowGap = 5,
    columnGap = 5,
    padding = 0,
    formLabel,
    formLabelPlacement,
    size,
    style,
    color,
    fillWidth
  } = props

  const group: JSX.Element = 
  (
    <div
      className="group-wrapper"
      style={{ width, padding: padding, ...style }}
    >
      <div className={`group-container`}
        style={{ rowGap, columnGap }}
      >{children}</div>
    </div>
  )

  return (
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}
          style={{ width: fillWidth ? '100%' : undefined}}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {group}
      </div>
    :
      group
  )
}
