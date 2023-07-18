import React, { useState } from 'react'
import { Colors, IGlobalProps, Size, TextAlignment, Type, getFontSize, getFormLabelSize, getHeight, isDark } from '../../global'
import './EditableText.scss'
import { IconButton } from '../IconButton'
import { Toggle, ToggleType } from '../Toggle'
import { FaEye, FaEyeSlash} from 'react-icons/fa'

export interface IEditableTextProps extends IGlobalProps {
  val?: string | number
  setVal?: (newText: string | number) => unknown
  setEditing?: (bool: boolean) => unknown
  placeholder?: string
  editing?: boolean
  size?: Size
  height?: number
  multiline?: boolean
  textAlign?: TextAlignment
  password?: boolean
}

/**
 * Editable Text is used for inline renaming of some text.
 * It appears as normal UI text but transforms into a text input field when the user clicks on or focuses it.
 * @param props
 * @returns
 */
export const EditableText = (props: IEditableTextProps) => {
  const [valLoc, setValLoc] = useState<string>('')
  const [editingLoc, setEditingLoc] = useState<boolean>(false)
  const {
    height,
    size,
    val = valLoc,
    setVal = setValLoc,
    setEditing = setEditingLoc,
    color = Colors.MEDIUM_BLUE,
    type = Type.PRIM,
    placeholder,
    width,
    multiline,
    textAlign = 'left',
    formLabel,
    formLabelPlacement,
    fillWidth,
    password,
    editing = password ? true : editingLoc,
    style
  } = props
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
  }

  const getBorderColor = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        return undefined;
      case Type.SEC:
        return color;
      case Type.TERT:
        if (editing) return color;
        else return color;
    }
  }

  const getColor = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        return color;
      case Type.SEC:
        return color;
      case Type.TERT:
        if (isDark(color)) return Colors.WHITE;
        else return Colors.BLACK
    }
  }

  const getBackground = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        return color;
      case Type.SEC:
        return color;
      case Type.TERT:
        return color
    }
  }

  const defaultProperties: React.CSSProperties = {
    height: getHeight(height, size),
    minHeight: getHeight(height, size),
    width: fillWidth ? '100%' : width,
    padding: undefined,
    fontWeight: 500,
    fontSize: getFontSize(size),
    fontFamily: 'sans-serif',
    borderColor: getBorderColor(),
    color: getColor()
  }

  const backgroundProperties: React.CSSProperties = {
    background: getBackground()
  }

  const editableText: JSX.Element = (
    <div className={`editableText-container ${type}`}
      style={{...defaultProperties, ...style}}
      onClick={() => setEditing(true)}
    > 
      {editing ? (
      <input
        className={`editableText ${type} ${textAlign}`}
        style={{ 
          height: getHeight(height, size), 
          textAlign: textAlign,
          width: fillWidth ? '100%' : width
        }}
        placeholder={placeholder}
        type={password && !showPassword ? 'password' : undefined}
        autoFocus
        onChange={handleOnChange}
        onBlur={() => {
          !password && setEditing(false)
        }}
        defaultValue={val}
      ></input>
      ) : (
        <div 
          className={`displayText ${type} ${textAlign}`}
          style={{ 
            height: getHeight(height, size), 
            textAlign: textAlign,
            width: fillWidth ? '100%' : width
          }}
        >
          {val ? val : placeholder}
        </div>
      )}
      {password && <div className={`password`}>
        <Toggle
          toggleType={ToggleType.BUTTON}
          type={Type.PRIM}
          size={size}
          color={color}
          toggleStatus={showPassword}
          onClick={() => setShowPassword(!showPassword)}
          tooltip={`${showPassword ? 'Hide' : 'Show'} Password`}
          icon={<FaEyeSlash/>}
          iconFalse={<FaEye/>}
        />
      </div>}
      <div className={`editableText-background ${type}`} style={backgroundProperties}/>
    </div>
  )

return (
  formLabel ? 
    <div className={`form-wrapper ${formLabelPlacement}`}>
      <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
      {editableText}
    </div>
  :
    editableText
  )
}
