import React, { useState } from 'react'
import { GithubPicker, ChromePicker, BlockPicker, SliderPicker, SketchPicker } from 'react-color'
import { IGlobalProps, Size, Type , getFormLabelSize } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Popup, PopupTrigger } from '../Popup'
import './ColorPicker.scss'
import { Dropdown, DropdownType } from '../Dropdown'

export const ColorPickerArray= ["Classic", "Chrome", "GitHub", "Block", "Slider"]
export type ColorPickerType= typeof ColorPickerArray[number];

export interface IColorPickerProps extends IGlobalProps {
  text?: string
  icon?: JSX.Element | string
  colorPickerType?: ColorPickerType
  defaultPickerType?: ColorPickerType
  selectedColor?: string
  setSelectedColor: (color: any) => unknown
  setFinalColor: (color:any) => unknown
}

export const ColorPicker = (props: IColorPickerProps) => {
  const [selectedColorLoc, setSelectedColorLoc] = useState();
  const { defaultPickerType, text, colorPickerType, fillWidth, formLabelPlacement, size = Size.SMALL, type = Type.TERT, icon, selectedColor = selectedColorLoc, setSelectedColor = setSelectedColorLoc, setFinalColor = setSelectedColorLoc, tooltip, color='black', formLabel } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [pickerSelectorOpen, setPickerSelectorOpen] = useState<boolean>(false);
  const decimalToHexString = (number: number) => {
    if (number < 0) {
        number = 0xffffffff + number + 1;
    }
    return (number < 16 ? '0' : '') + number.toString(16).toUpperCase();
}
  const colorString = (color: any ) => {
    return color.hex === 'transparent' ? color.hex: color.hex + (color.rgb.a ? decimalToHexString(Math.round(color.rgb.a * 255)) : 'ff');
  }
  const onChange = (color: any) => {
    setSelectedColor(colorString(color) as any);
  }
  const onChangeComplete = (color: any) => {
    setFinalColor(colorString(color) as any);
  }
  const [picker, setPicker] = useState<string>(defaultPickerType ?? "Classic")

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
    '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB', "transparent"
    ]
    switch(pickerType) {
      case "Block":
        return (
          <BlockPicker
            color={selectedColor}
            triangle={'hide'}
            colors={colorPalette}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        );
      case "Classic":
        return (<SketchPicker
          onChange={onChange}
          onChangeComplete={onChangeComplete}
          presetColors={['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF', '#f1efeb', 'transparent']}
          color={selectedColor}
        />);
      case "Chrome":
      default:
        return (
          <ChromePicker
            color={selectedColor}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        );
      case "GitHub":
        return (
          <GithubPicker
            color={selectedColor}
            colors={colorPalette}
            triangle={'hide'}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        );
      case "Slider":
        return (
          <div style={{width: 200, height: 50}}>
          <SliderPicker
            color={selectedColor}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
          </div>
        );
    }
  }
  const openChanged = (isOpen:boolean) => setPickerSelectorOpen(isOpen);
  const pickerIsOpen = (x:number, y:number) => pickerSelectorOpen;

  const getPopup = ():JSX.Element => {
    if (colorPickerType){
      return getColorPicker(colorPickerType)
    } else {
      // Todo: this would be much easier if the selectedColor was a Color, not a string.
      const newColor =  (selectedColor === 'transparent' ? 'white': selectedColor?.startsWith("#") ? selectedColor.substring(0,7):
                         selectedColor?.startsWith('rgba') ? selectedColor?.replace(/,[0-9]*\)/,"1)") : selectedColor);
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
          activeChanged={openChanged}
          placement={'right'}
          color={newColor}
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
        popupContainsPt={pickerIsOpen} // this should prohbably test to see if the click pt is actually within the picker selector list popup.
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
