import React from 'react'
import './EditableText.scss'

export interface IEditableTextProps {
  text?: string
  placeholder?: string
  editing: boolean
  onEdit: (newText: string) => void
  setEditing: (editing: boolean) => void
  backgroundColor?: string

}

export const EditableText = (props: IEditableTextProps) => {
  const { editing, text, onEdit, setEditing, backgroundColor, placeholder } = props

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEdit(event.target.value)
  }

  return editing ? (
    <input
      style={{background: backgroundColor}}
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
