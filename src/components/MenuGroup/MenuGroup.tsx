import React from 'react'
import './MenuGroup.scss'

export interface IMenuGroupProps {
  orientation: 'hor' | 'vert'
  children: any
}

export const MenuGroup = (props: IMenuGroupProps) => {
  const { children, orientation } = props
  return (
    <div
      className="group-container"
      style={{ flexDirection: orientation == 'hor' ? 'row' : 'column' }}
    >
      {children}
    </div>
  )
}
