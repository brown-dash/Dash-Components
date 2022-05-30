import { useState } from 'react'
import React from 'react'
import './ColorPicker.scss'
import { GithubPicker } from 'react-color'
import { IconButton } from '../IconButton'
import { Borders, Colors, isDark, Size } from '../../global'
import { Button } from '../Button'

export interface IColorPickerProps {
  text?: string
  icon?: string
  onChange: (color: any) => void
}

export const ColorPicker = (props: IColorPickerProps) => {
  const { text, icon, onChange } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [color, setColor] = useState<any>('#fccb00')
  const onChangeComplete = (color: any) => {
    console.log(color)
    setColor(color.hex)
    onChange(color.hex)
  }

  const getToggle = () => {
    if (icon && !text) {
      return (
        <IconButton
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
          size={Size.SMALL}
          backgroundColor={color}
          color={isDark(color) ? Colors.WHITE : Colors.BLACK}
          icon={icon}
        />
      )
    } else if (text) {
      return (
        <Button
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
          size={Size.SMALL}
          backgroundColor={color}
          color={isDark(color) ? Colors.WHITE : Colors.BLACK}
          text={text}
          icon={icon}
        />
      )
    } else {
      return (
        <IconButton
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
          size={Size.SMALL}
          backgroundColor={color}
        />
      )
    }
  }

  return (
    <div className="colorPicker-container">
      <div className="colorPicker-toggle" onClick={() => setOpen(!isOpen)}>
        {getToggle()}
      </div>
      {isOpen && (
        <div
          className={'colorPicker-popup'}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <GithubPicker
            color={color}
            triangle={'hide'}
            onChange={onChangeComplete}
            onChangeComplete={onChangeComplete}
          />
        </div>
      )}
    </div>
  )
}
