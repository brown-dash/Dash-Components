import { useState } from 'react'
import React from 'react';
import './ColorPicker.scss'
import { GithubPicker } from 'react-color'

export interface IColorPickerProps {
  title?: string
  onChange: (color: any) => void
}

export const ColorPicker = (props: IColorPickerProps) => {
  const { title, onChange } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [color, setColor] = useState<any>('black')
  const onChangeComplete = (color: any) => {
    console.log(color)
    setColor(color.hex)
  }
  return (
    <div className={`colorPicker ${isOpen}`}>
      {title}
      <div className="colorPicker-container">
        <div
          className="colorPicker-toggle"
          style={{ backgroundColor: color }}
          onClick={() => setOpen(!isOpen)}
        />
        {isOpen && (
          <div className={'colorPicker-popup'} onPointerDown={(e) => e.stopPropagation()}>
            <GithubPicker
              color={color}
              triangle={'hide'}
              onChange={onChangeComplete}
              onChangeComplete={onChangeComplete}
            />
          </div>
        )}
      </div>
    </div>
  )
}
