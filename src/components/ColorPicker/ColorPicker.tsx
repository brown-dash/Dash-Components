import React, { useState } from 'react'
import { GithubPicker } from 'react-color'
import { getFontSize, IGlobalProps, Size, Type } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Popup, PopupTrigger } from '../Popup'
import './ColorPicker.scss'

export interface IColorPickerProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  color?: string
  onChange: (color: any) => void
}

export const ColorPicker = (props: IColorPickerProps) => {
  const { text, formLabelPlacement, size = Size.SMALL, type = Type.TERT, icon, onChange, tooltip, color='black', formLabel } = props
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
          color={color}
          size={Size.SMALL}
          icon={icon}
          colorPicker={curColor}
        />
      )
    } else if (text) {
      return (
        <Button
          tooltip={tooltip}
          size={Size.SMALL}
          type={type}
          color={color}
          text={text}
          icon={icon}
          colorPicker={curColor}
        />
      )
    } else {
      return (
        <IconButton
          tooltip={tooltip}
          type={type}
          color={color}
          size={Size.SMALL}
          icon={icon}
          colorPicker={curColor}
        />
      )
    }
  }

  const colorPicker: JSX.Element = 
  (
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
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {colorPicker}
      </div>
    :
      colorPicker
  )
}
