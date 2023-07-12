import React, { useState } from 'react'
import { GithubPicker, ChromePicker, BlockPicker, SliderPicker } from 'react-color'
import { getFontSize, IGlobalProps, Size, Type } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Popup, PopupTrigger } from '../Popup'
import './ColorPicker.scss'

export type ColorPickerType = "chrome" | "github" | "block" | "slider"
export interface IColorPickerProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  colorPickerType?: ColorPickerType
  selectedColor?: string
  setSelectedColor: (color: any) => unknown
}

export const ColorPicker = (props: IColorPickerProps) => {
  const { text, colorPickerType="chrome", formLabelPlacement, size = Size.SMALL, type = Type.TERT, icon, selectedColor, setSelectedColor, tooltip, color='black', formLabel } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const onChange = (color: any) => {
    setSelectedColor(color.hex)
  }

  const getToggle = () => {
    if (icon && !text) {
      return (
        <IconButton
          active={isOpen}
          tooltip={tooltip}
          type={type}
          color={color}
          size={Size.SMALL}
          icon={icon}
          colorPicker={selectedColor}
        />
      )
    } else if (text) {
      return (
        <Button
          active={isOpen}
          tooltip={tooltip}
          size={Size.SMALL}
          type={type}
          color={color}
          text={text}
          icon={icon}
          colorPicker={selectedColor}
        />
      )
    } else {
      return (
        <IconButton
          active={isOpen}
          tooltip={tooltip}
          type={type}
          color={color}
          size={Size.SMALL}
          icon={icon}
          colorPicker={selectedColor}
        />
      )
    }
  }

  const getPopup = ():JSX.Element => {
    const colorPalette = ["FFFFFF", "#F9F6F2", "#E2E2E2", "#D1D1D1", "#737576", "#4b4a4d", "#222021", 
    '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'
    ]

    switch(colorPickerType) {
      case "block":
        return (
          <BlockPicker
            color={selectedColor}
            triangle={'hide'}
            colors={colorPalette}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
      case "chrome":
        return (
          <ChromePicker
            color={selectedColor}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
      case "github":
        return (
          <GithubPicker
            color={selectedColor}
            colors={colorPalette}
            triangle={'hide'}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
      case "slider":
        return (
          <SliderPicker
            color={selectedColor}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
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
        popup={getPopup()}
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
