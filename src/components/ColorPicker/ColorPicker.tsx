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
  const [color, setColor] = useState<any>('linear-gradient(#065fff, #85c1f9)')
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
            colors={["FFFFFF", "#F9F6F2", "#E2E2E2", "#D1D1D1", "#737576", "#4b4a4d", "#222021", 
            '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB', 
            'linear-gradient(#065fff, #85c1f9)', 'linear-gradient(#fc00ff, #00dbde)', 'linear-gradient(#2c3e50, #3498db)', 'linear-gradient(#CCCCB2, #757519)', 'linear-gradient(#ee9ca7, #ffdde1)']}
            triangle={'hide'}
            onChange={onChangeComplete}
            onChangeComplete={onChangeComplete}
          />
        </div>
      )}
    </div>
  )
}
