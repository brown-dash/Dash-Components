import React from 'react'
import { Size, getHeight } from '../../global'
import './EditableText.scss'

export interface IEditableTextProps {
  text?: string
  placeholder?: string
  editing: boolean
  onEdit: (newText: string) => void
  setEditing: (editing: boolean) => void
  backgroundColor?: string
  size?: Size
  height?: number
}

/**
 * Editable Text is used for inline renaming of some text.
 * It appears as normal UI text but transforms into a text input field when the user clicks on or focuses it.
 * @param props
 * @returns
 */
export const EditableText = (props: IEditableTextProps) => {
  const {
    editing,
    height,
    size,
    text,
    onEdit,
    setEditing,
    backgroundColor,
    placeholder,
  } = props

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEdit(event.target.value)
  }

  return editing ? (
    <input
      style={{ background: backgroundColor, height: getHeight(height, size) }}
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
