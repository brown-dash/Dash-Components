import React, { useState } from 'react'
import { getHeight, IGlobalProps } from '../../global'
import './Slider.scss'

export interface ISliderProps extends IGlobalProps {
  multithumb: boolean
  min: number
  max: number
  initialVal?: number
  step?: number
  minDiff?: number
}

export const Slider = (props: ISliderProps) => {
  const { multithumb, min = 0, max = 100, step, initialVal, minDiff, size, height } = props
  const [value, setValue] = useState<number>(initialVal ? initialVal : 0)
  const [endValue, setEndValue] = useState<number>(
    initialVal ? initialVal + 20 : 0
  )

  const getLeftPos = (locVal: number) => {
    const container = document.getElementById("rs-container");
    if (container) {
      const width = container.getBoundingClientRect().width - 11;
      return (locVal / max) * width
    }
    return locVal;
  }

  const getSlider = (): JSX.Element[] => {
    if (multithumb) {
      return [
        <div className="range-slider">
          <span id="rs-bullet" className="rs-label" style={{left: `${getLeftPos(endValue)}px`}}>{endValue}</span>
          <input
            type="range"
            min={min}
            max={max}
            height={getHeight(height, size)}
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
            className={`rs-range ${'end'}`}
            id="rs-range"
          />
          </div>,
          <div className="range-slider">
          <span id="rs-bullet" className="rs-label" style={{left: `${getLeftPos(value)}px`}}>{value}</span>
            <input
            type="range"
            min={min}
            max={max}
            height={getHeight(height, size)}
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
            className={`rs-range ${'start'}`}
            id="rs-range"
          />
          </div>,
          <div className="box-minmax">
            <span>{min}</span><span>{max}</span>
          </div>
          ]
    } else {
      return ([
        <div className="range-slider">
          <span id="rs-bullet" className="rs-label" style={{left: `${getLeftPos(value)}px`}}>{value}</span>
          <input id="rs-range-line" 
            className="rs-range" 
            type="range" 
            step={step}
            value={value}
            min={min}
            max={max}
            onChange={(e) => {
              setValue(Number(e.target.value))
            }}
          />
        </div>,
        <div className="box-minmax">
          <span>{min}</span><span>{max}</span>
        </div>
        ])
    }
  }

  return (
    <div className="slider-container" id="rs-container" style={{height: getHeight(height, size)}}>
      {getSlider()}
    </div>
  )
}
