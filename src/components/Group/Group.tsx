import React from 'react'
import './Group.scss'

export interface IGroupProps {
  children: any
  gap?: number;
  width?: number | string
}

export const Group = (props: IGroupProps) => {
  const { 
    children, 
    width = '100%',
    gap = 10,
  } = props
  return (
    <div
      className="group-container"
      style={{ width: width, gap: gap, padding: `${gap}px 0px` }}
    >
      {children}
    </div>
  )
}
