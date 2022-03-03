import React from 'react'
import './TextInput.scss'

export interface ITextInputProps {
  placeholder?: string
  value?: string
  title?: string
  type?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = (props: ITextInputProps) => {
  const { placeholder, type, value, title, onChange } = props
  return (
    <div className="textInput-container">
      <input
        className={'textInput'}
        type={type ? type : 'text'}
        value={value}
        onChange={onChange}
        placeholder={title}
        required={true}
      />
      <label className={'textInput-label'}>{title}</label>
    </div>
  )
}
