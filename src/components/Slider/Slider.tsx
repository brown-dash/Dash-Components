import React, { useEffect, useRef, useState } from 'react'
import { Colors, getFontSize, getHeight, IGlobalProps, Size , getFormLabelSize, isDark, INumberProps } from '../../global'
import './Slider.scss'

export interface ISliderProps extends INumberProps {
  multithumb: boolean
  initialVal?: number
  initialEndVal?: number
  endNumber?: number
  setEndNumber?: (newVal: number) => void
  setFinalNumber?: (newVal: number) => void
  setFinalEndNumber?: (newVal: number) => void
  step?: number
  minDiff?: number
}

export const Slider = (props: ISliderProps) => {
  const [width, setWidth] = useState<number>(100);
  const [valLoc, setNumberLoc] = useState<number>(props.initialVal??(props.min + (props.max-props.min)/2));
  const [endNumberLoc, setEndNumberLoc] = useState<number>(props.initialEndVal??(props.min + (props.max-props.min)/2));

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

  const getLeftPos = (locVal: number) => {
    const dragger = getHeight(height,size)
    console.log(`locVal=${locVal} min=${min} max=${max} width=${width} dragger=${dragger}==> ratio=${((locVal-min)/ (max-min))} newwidt=${(width-dragger)} ${(((locVal-min)/ (max-min)) * (width-dragger))}`)
      return (((locVal-min)/ (max-min)) * (width-dragger))
  }

  const getValueLabel = (locVal: number): JSX.Element => {
    return (<div className="rs-label-container" 
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
          />
          </div>
          ]
    } else {
      return ([
        <div className={`range-slider ${size}`}>
          {getValueLabel(number)}
          <input 
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
      <div className="slider-container" ref={r => setWidth(+(r?.clientWidth??100))} style={{height: getHeight(height, size)}}
        onPointerDown={onPointerDown}
      >
        {getSlider()}
        <div className="selected-range" style={{
          height: getHeight(height, size) / 10,
          background: multithumb ? Colors.LIGHT_GRAY : color

        }}/>
        <div className="range" style={{
          height: getHeight(height, size) / 10,
          width: getLeftPos(endNumber) - getLeftPos(number),
          left: getLeftPos(number) + getHeight(height, size),
          display: multithumb ? undefined: 'none',
          background: color,
        }}/>
        <div className="box-minmax" style={{
          fontSize: getFontSize(size),
          color
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

