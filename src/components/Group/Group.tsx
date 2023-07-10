import React from 'react'
import './Group.scss'

export interface IGroupProps {
  children: any
  rowGap?: number;
  columnGap?: number;
  width?: number | string
}

export const Group = (props: IGroupProps) => {
  const { 
    children, 
    width = '100%',
    rowGap = 5,
    columnGap = 5,
  } = props
  return (
    <div
      className="group-wrapper"
      style={{ width, padding: `${rowGap}px ${columnGap}px` }}
    >
      <div className={`group-container`}
        style={{ rowGap, columnGap }}
      >{children}</div>
    </div>
  )
}
