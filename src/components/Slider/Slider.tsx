import React, { useEffect, useRef, useState } from 'react'
import { Colors, getFontSize, getHeight, IGlobalProps, Size , getFormLabelSize, isDark, INumberProps } from '../../global'
import './Slider.scss'

export interface ISliderProps extends INumberProps {
  multithumb: boolean
  endNumber?: number
  setEndNumber?: (newVal: number) => void
  setFinalNumber?: (newVal: number) => void
  setFinalEndNumber?: (newVal: number) => void
  step?: number
  minDiff?: number
}

export const Slider = (props: ISliderProps) => {
  const [valLoc, setNumberLoc] = useState<number>(0);
  const [endNumberLoc, setEndNumberLoc] = useState<number>(10);

  const { 
    formLabel, 
    formLabelPlacement, 
    multithumb, 
    min = 0, 
    max = 100, 
    step = 1, 
    number = valLoc, 
    endNumber = endNumberLoc, 
    minDiff, 
    size = Size.SMALL, 
    height, 
    unit, 
    onPointerDown, 
    setNumber = setNumberLoc, 
    setEndNumber = setEndNumberLoc,
    setFinalNumber, 
    setFinalEndNumber,
    color = Colors.MEDIUM_BLUE,
    fillWidth
  } = props
  const container = useRef(null);

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
              background: color,
              color: isDark(color) ? Colors.LIGHT_GRAY : Colors.DARK_GRAY,
              fontSize: getFontSize(size),
              height: getHeight(height, size),
              width: getHeight(height, size),
              top: 0
            }}
            >
            <span className="rs-label">
              {locVal}
            </span>
          </div>)
  }

  const getSlider = (): JSX.Element[] => {
    if (multithumb) {
      return [
        <div className={`range-slider ${size}`}>
          {getValueLabel(endNumber)}
          <input
            type="range"
            color={color}
            min={min}
            max={max}
            height={getHeight(height, size)}
            step={step}
            value={endNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.stopPropagation()
              setEndNumber(Math.max(number + (minDiff??0), Number(e.target.value)))
            }}
            onPointerDown={() => {
            }}
            onPointerUp={() => {
              setFinalEndNumber?.(endNumberLoc)
            }}
            className={`rs-range ${size}`}
            id="rs-range"
          />
          </div>,
        <div className={`range-slider ${size}`}>
          {getValueLabel(number)}
            <input
            type="range"
            color={color}
            min={min}
            max={max}
            height={getHeight(height, size)}
            step={step}
            value={number}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.stopPropagation()
              setNumber(Math.min(endNumber - (minDiff??0), Number(e.target.value)))
            }}
            onPointerDown={() => {
            }}
            onPointerUp={() => {
              setFinalNumber?.(valLoc)
            }}
            className={`rs-range ${size}`}
            id="rs-range"
          />
          </div>
          ]
    } else {
      return ([
        <div className={`range-slider ${size}`}>
          {getValueLabel(number)}
          <input id="rs-range-line" 
            className={`rs-range ${size}`}
            type="range" 
            step={step}
            value={number}
            min={min}
            max={max}
            onPointerDown={() => {
            }}
            onPointerUp={() => {
              setFinalNumber?.(valLoc)
            }}
            onChange={(e) => {
              setNumber(Number(e.target.value))
            }}
          />
        </div>
        ])
    }
  }

  const slider: JSX.Element = (
    <div className={`slider-wrapper`} style={{
      padding: `5px 0px ${getHeight(height, size)}px 0px`,
      width: fillWidth ? '100%' : 'fit-content'
    }}>
      <div className="slider-container" id="rs-container" ref={container} style={{height: getHeight(height, size)}}
        onPointerDown={onPointerDown}
      >
        {getSlider()}
        <div className="selected-range" style={{
          height: getHeight(height, size) / 10,
          background: multithumb ? Colors.LIGHT_GRAY : color

        }}></div>
        <div className="range" style={{
          height: getHeight(height, size) / 10,
          width: getLeftPos(endNumber) - getLeftPos(number),
          left: getLeftPos(number) + getHeight(height, size),
          background: multithumb ? color : Colors.LIGHT_GRAY,
        }}></div>
        <div className="box-minmax" style={{
          fontSize: getFontSize(size),
          color: color
        }}>
          <span>{min}{unit}</span><span>{max}{unit}</span>
        </div>
      </div>
    </div>
  )

  return (
    formLabel ? 
    <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {slider}
    </div>
    :
    slider
)
}

