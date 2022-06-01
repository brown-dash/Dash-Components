import React from 'react'
import './Slider.scss'

export interface ISliderProps {}

export const Slider = (props: ISliderProps) => {
  const {} = props
  return (
    <div className="slider-container">
      <input type="range"></input>
    </div>
  )
}
