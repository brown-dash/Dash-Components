import React, { useState } from 'react'
import './Slider.scss'

export interface ISliderProps {
  multithumb: boolean
  min: number
  max: number
  initialVal?: number
  step?: number
  minDiff?: number
}

export const Slider = (props: ISliderProps) => {
  const { multithumb, min, max, step, initialVal, minDiff } = props
  const [value, setValue] = useState<number>(initialVal ? initialVal : 0)
  const [endValue, setEndValue] = useState<number>(
    initialVal ? initialVal + 20 : 0
  )
  const getSlider = (): JSX.Element => {
    if (multithumb) {
      return (
        <div className="multiThumb-slider">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={endValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.stopPropagation()
              if (minDiff) {
                setEndValue(Math.max(value + minDiff, Number(e.target.value)))
              } else {
                setEndValue(Math.max(value, Number(e.target.value)))
              }
            }}
            style={{ gridColumn: 1, gridRow: 1 }}
            className={`toolbar-slider ${'end'}`}
            id="toolbar-slider"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.stopPropagation()
              if (minDiff) {
                setValue(Math.min(endValue - minDiff, Number(e.target.value)))
              } else {
                setValue(Math.min(endValue, Number(e.target.value)))
              }
            }}
            style={{ gridColumn: 1, gridRow: 1 }}
            className={`toolbar-slider ${'start'}`}
            id="toolbar-slider"
          />
        </div>
      )
    } else {
      return (
        <input
          className="toolbar-slider"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value))
          }}
          type="range"
        ></input>
      )
    }
  }

  return (
    <div className="slider-container">
      {value}
      {endValue}
      {getSlider()}
    </div>
  )
}
