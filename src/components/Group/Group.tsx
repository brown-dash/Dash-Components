import React from 'react'
import './Group.scss'
import { IGlobalProps, getFontSize } from '../../global';

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
    style
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
      <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {group}
      </div>
    :
      group
  )
}
