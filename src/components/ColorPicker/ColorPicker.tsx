import React, { useState } from 'react'
import { GithubPicker, ChromePicker, BlockPicker, SliderPicker } from 'react-color'
import { getFontSize, IGlobalProps, Size, Type , getFormLabelSize } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Popup, PopupTrigger } from '../Popup'
import './ColorPicker.scss'
import { Dropdown, DropdownType } from '../Dropdown'

export const ColorPickerArray= ["Chrome", "GitHub", "Block", "Slider"]
export type ColorPickerType= typeof ColorPickerArray[number];

export interface IColorPickerProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  colorPickerType?: ColorPickerType
  selectedColor?: string
  setSelectedColor: (color: any) => unknown
}

export const ColorPicker = (props: IColorPickerProps) => {
  const [selectedColorLoc, setSelectedColorLoc] = useState();
  const { text, colorPickerType, fillWidth, formLabelPlacement, size = Size.SMALL, type = Type.TERT, icon, selectedColor = selectedColorLoc, setSelectedColor = setSelectedColorLoc, tooltip, color='black', formLabel } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const decimalToHexString = (number: number) => {
    if (number < 0) {
        number = 0xffffffff + number + 1;
    }
    return (number < 16 ? '0' : '') + number.toString(16).toUpperCase();
}
  const colorString = (color: any ) => {
    return color.hex.startsWith('#') ? color.hex + (color.rgb.a ? decimalToHexString(Math.round(color.rgb.a * 255)) : 'ff') : color.hex;
  }
  const onChange = (color: any) => {
    setSelectedColor(colorString(color.hex));
  }
  const [picker, setPicker] = useState<string>("Chrome")

  const getToggle = () => {
    if (icon && !text) {
      return (
        <IconButton
          active={isOpen}
          tooltip={tooltip}
          type={type}
          color={color}
          size={size}
          icon={icon}
          colorPicker={selectedColor}
          fillWidth={fillWidth}
        />
      )
    } else if (text) {
      return (
        <Button
          active={isOpen}
          tooltip={tooltip}
          size={size}
          type={type}
          color={color}
          text={text}
          icon={icon}
          align={'flex-start'}
          iconPlacement={'left'}
          colorPicker={selectedColor}
          fillWidth={fillWidth}
        />
      )
    } else {
      return (
        <IconButton
          active={isOpen}
          tooltip={tooltip}
          type={type}
          color={color}
          size={size}
          icon={icon}
          colorPicker={selectedColor}
          fillWidth={fillWidth}
        />
      )
    }
  }

  const getColorPicker = (pickerType: ColorPickerType):JSX.Element => {
    const colorPalette = ["FFFFFF", "#F9F6F2", "#E2E2E2", "#D1D1D1", "#737576", "#4b4a4d", "#222021", 
    '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'
    ]
    switch(pickerType) {
      case "Block":
        return (
          <BlockPicker
            color={selectedColor}
            triangle={'hide'}
            colors={colorPalette}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
      case "Chrome":
      default:
        return (
          <ChromePicker
            color={selectedColor}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
      case "GitHub":
        return (
          <GithubPicker
            color={selectedColor}
            colors={colorPalette}
            triangle={'hide'}
            onChange={onChange}
            onChangeComplete={onChange}
          />
        );
      case "Slider":
        return (
          <div style={{width: 200, height: 50}}>
          <SliderPicker
            color={selectedColor}
            onChange={onChange}
            onChangeComplete={onChange}
          />
          </div>
        );
    }
  }

  const getPopup = ():JSX.Element => {
    if (colorPickerType){
      return getColorPicker(colorPickerType)
    } else {
      return <div style={{height: 'fit-content'}}>
        <Dropdown
          items={
            ColorPickerArray.map((item) => {
              return {
                text: item,
                val: item,
              }
            })
          }
          placement={'right'}
          color={selectedColor}
          type={Type.PRIM}
          dropdownType={DropdownType.SELECT}
          selectedVal={picker}
          setSelectedVal={(val) => setPicker(val as string)}
          fillWidth
        />
        {getColorPicker(picker)}
      </div>
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
        color={selectedColor}
        popup={getPopup()}
      />
  )

  return (
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}
style={{ width: fillWidth ? '100%' : undefined}}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {colorPicker}
      </div>
    :
      colorPicker
  )
}
