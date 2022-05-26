import React from 'react'
import { Size } from '../../global/globalEnums'
import './EditableText.scss'

export interface IEditableTextProps {
  text?: string
  placeholder?: string
  editing: boolean
  onEdit: (newText: string) => void
  setEditing: (editing: boolean) => void
  backgroundColor?: string
  size?: Size
  height?: number | string
}

export const EditableText = (props: IEditableTextProps) => {
  const { editing, height, size, text, onEdit, setEditing, backgroundColor, placeholder } = props

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEdit(event.target.value)
  }

  const getHeight = () => {
    if (height) return height
    switch(size) {
      case Size.SMALL:
        return 30
      case Size.MEDIUM:
        return 40
      case Size.LARGE:
        return 50
    }
  }


  return editing ? (
    <input
      style={{background: backgroundColor, height: getHeight()}}
      placeholder={placeholder}
      size={1}
      className="editableText"
      autoFocus
      onChange={handleOnChange}
      onBlur={() => setEditing(false)}
      defaultValue={text}
    ></input>
  ) : (
    <div className="displayText">{text}</div>
  )
}
