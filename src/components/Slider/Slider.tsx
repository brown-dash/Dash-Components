import React, { useEffect, useRef, useState } from 'react'
import { Colors, getFontSize, getHeight, IGlobalProps, Size } from '../../global'
import './Slider.scss'
import { INumberInputProps } from '../NumberDropdown'

export interface ISliderProps extends INumberInputProps {
  multithumb: boolean
  initVal?: number
  initEndVal?: number
  setVal?: (newVal: number) => void
  setEndVal?: (newVal: number) => void
  step?: number
  minDiff?: number
}

export const Slider = (props: ISliderProps) => {
  const { formLabel, formLabelPlacement, multithumb, min = 0, max = 100, step = 1, initVal = 0, initEndVal = max, minDiff, size = Size.SMALL, height, unit, onPointerDown, setVal, setEndVal } = props
  const [value, setValue] = useState<number>(initVal);
  const [endValue, setEndValue] = useState<number>(initEndVal);
  const [isActive, setIsActive] = useState<boolean>(false);
  const container = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 1)
  },[])

  const getLeftPos = (locVal: number) => {
    if (container && container.current) {
      const width = (container.current as any).getBoundingClientRect().width - getHeight(height, size);
      return ((locVal / max) * width)
    }
    return locVal;
  }

  const getValueLabel = (locVal: number): JSX.Element => {
    return (<div id="rs-bullet" className="rs-label-container" 
            style={{
              left: `${getLeftPos(locVal)}px`,
              opacity: isActive ? 1 : 0, 
              fontSize: getFontSize(size),
              height: getHeight(height, size),
              width: getHeight(height, size),
              top: - getHeight(height, size)
            }}
            >
            <span className="rs-label">
              {locVal}{unit}
            </span>
          </div>)
  }

  const getSlider = (): JSX.Element[] => {
    if (multithumb) {
      return [
        <div className={`range-slider ${size}`}>
          {getValueLabel(endValue)}
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
                setEndVal && setEndVal(Math.max(value + minDiff, Number(e.target.value)))
              } else {
                setEndValue(Math.max(value, Number(e.target.value)))
                setEndVal && setEndVal(Math.max(value, Number(e.target.value)))
              }
            }}
            onPointerDown={() => {
              setIsActive(true)
            }}
            onPointerUp={() => {
              setIsActive(false)
            }}
            className={`rs-range ${size}`}
            id="rs-range"
          />
          </div>,
        <div className={`range-slider ${size}`}>
          {getValueLabel(value)}
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
                setVal && setVal(Math.min(endValue - minDiff, Number(e.target.value)))
              } else {
                setValue(Math.min(endValue, Number(e.target.value)))
                setVal && setVal(Math.min(endValue, Number(e.target.value)))
              }
            }}
            onPointerDown={() => {
              setIsActive(true)
            }}
            onPointerUp={() => {
              setIsActive(false)
            }}
            className={`rs-range ${size}`}
            id="rs-range"
          />
          </div>
          ]
    } else {
      return ([
        <div className={`range-slider ${size}`}>
          {getValueLabel(value)}
          <input id="rs-range-line" 
            className={`rs-range ${size}`}
            type="range" 
            step={step}
            value={value}
            min={min}
            max={max}
            onPointerDown={() => {
              setIsActive(true)
            }}
            onPointerUp={() => {
              setIsActive(false)
            }}
            onChange={(e) => {
              setValue(Number(e.target.value))
              setVal && setVal(Number(e.target.value))
            }}
          />
        </div>
        ])
    }
  }

  const slider: JSX.Element = (
    <div className={`slider-wrapper`} style={{padding: `${getHeight(height, size)}px 5px`}}>
      <div className="slider-container" id="rs-container" ref={container} style={{height: getHeight(height, size)}}
        onPointerDown={onPointerDown}
      >
        {getSlider()}
        <div className="selected-range" style={{
          height: getHeight(height, size) / 10,
          background: multithumb ? Colors.LIGHT_GRAY : Colors.MEDIUM_BLUE

        }}></div>
        <div className="range" style={{
          height: getHeight(height, size) / 10,
          width: getLeftPos(endValue) - getLeftPos(value),
          left: getLeftPos(value) + getHeight(height, size),
          background: multithumb ? Colors.MEDIUM_BLUE : Colors.LIGHT_GRAY,
        }}></div>
        <div className="box-minmax" style={{fontSize: getFontSize(size)}}>
          <span>{min}{unit}</span><span>{max}{unit}</span>
        </div>
      </div>
    </div>
  )

  return (
    formLabel ? 
    <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {slider}
    </div>
    :
    slider
)
}

