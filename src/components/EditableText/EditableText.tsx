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
  const { editing, text, onEdit, setEditing, backgroundColor } = props

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEdit(event.target.value)
  }

  // return (
  //   <input
  //     className="editableText"
  //     autoFocus
  //     onChange={handleOnChange}
  //     onBlur={() => setEditing(false)}
  //     defaultValue={text}
  //   ></input>
  // )

  return editing ? (
    <input
      style={{background: backgroundColor}}
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
