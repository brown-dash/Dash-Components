import React from 'react'
import './FormInput.scss'

export interface IFormInputProps {
  placeholder?: string
  value?: string
  title?: string
  type?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = (props: IFormInputProps) => {
  const { placeholder, type, value, title, onChange } = props
  return (
    <div className="formInput-container">
      <input
        className={'formInput'}
        type={type ? type : 'text'}
        value={value}
        onChange={onChange}
        placeholder={title}
        required={true}
      />
      <label className={'formInput-label'}>{title}</label>
    </div>
  )
}
