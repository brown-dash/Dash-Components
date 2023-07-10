import { useState } from 'react'
import React from 'react'
import './ColorPicker.scss'
import { GithubPicker } from 'react-color'
import { IconButton } from '../IconButton'
import { Borders, Colors, IGlobalProps, isDark, Size } from '../../global'
import { Button, Type } from '../Button'
import { Tooltip } from '@mui/material';
import { Popup, PopupTrigger } from '../Popup'

export interface IColorPickerProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  color?: string
  onChange: (color: any) => void
}

export const ColorPicker = (props: IColorPickerProps) => {
  const { text, size = Size.SMALL, type = Type.TERT, icon, onChange, tooltip, color='linear-gradient(#065fff, #85c1f9)' } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [curColor, setColor] = useState<any>(color)
  const onChangeComplete = (color: any) => {
    console.log(color)
    setColor(color.hex)
    onChange(color.hex)
  }

  const getToggle = () => {
    if (icon && !text) {
      return (
        <IconButton
          tooltip={tooltip}
          type={type}
          color={curColor}
          size={Size.SMALL}
          icon={icon}
        />
      )
    } else if (text) {
      return (
        <Button
          tooltip={tooltip}
          size={Size.SMALL}
          type={type}
          color={curColor}
          text={text}
          icon={icon}
        />
      )
    } else {
      return (
        <IconButton
          tooltip={tooltip}
          type={type}
          color={curColor}
          size={Size.SMALL}
          icon={icon}
        />
      )
    }
  }

  return (
    <Popup
        toggle={getToggle()}
        trigger={PopupTrigger.CLICK}
        isOpen={isOpen}
        setOpen={setOpen}
        tooltip={tooltip}
        size={size}
        popup={
          <GithubPicker
              color={curColor}
              colors={["FFFFFF", "#F9F6F2", "#E2E2E2", "#D1D1D1", "#737576", "#4b4a4d", "#222021", 
              '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'
              ]}
              triangle={'hide'}
              onChange={onChangeComplete}
              onChangeComplete={onChangeComplete}
            />
        }
        />
  )

  return (
      <div className="colorPicker-container">
        <div className="colorPicker-toggle" onClick={() => setOpen(!isOpen)}>
          <Tooltip title={tooltip}>
            {getToggle()}
          </Tooltip>
        </div>
        {isOpen && (
          <div
            className={'colorPicker-popup'}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <GithubPicker
              color={curColor}
              colors={["FFFFFF", "#F9F6F2", "#E2E2E2", "#D1D1D1", "#737576", "#4b4a4d", "#222021", 
              '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'
              ]}
              triangle={'hide'}
              onChange={onChangeComplete}
              onChangeComplete={onChangeComplete}
            />
          </div>
        )}
      </div>
  )
}
