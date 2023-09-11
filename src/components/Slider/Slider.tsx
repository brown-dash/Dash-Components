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

let lastVal = 0;  // bcz: WHY do I have to do this??  the pointerdown event locks in the value of 'valLoc' when it's created so need some other way to get the current value to that old handler...
let lastEndVal = 0;

export const Slider = (props: ISliderProps) => {
  const [width, setWidth] = useState<number>(100);
  const [valLoc, setNumberLoc] = useState<number>(props.number??(props.min + (props.max-props.min)/2));
  const [endNumberLoc, setEndNumberLoc] = useState<number>(props.endNumber??(props.min + (props.max-props.min)/2));
  
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
    const pointerup = (e:PointerEvent) => {
      document.removeEventListener?.('pointerup', pointerup, true);
      setFinalNumber?.(lastVal)
    };
    if (multithumb) {
      const pointerEndup = (e:PointerEvent) => {
        document.removeEventListener?.('pointerup', pointerEndup, true);
        setFinalEndNumber?.(lastEndVal)
      };
      return [
        <div className={`range-slider ${size}`}>
          {getValueLabel(endNumberLoc)}
          <input
            type="range"
            color={color}
            min={min}
            max={max}
            height={getHeight(height, size)}
            step={step}
            value={endNumber}
            onChange={e => {
              e.stopPropagation();
              setEndNumber(lastEndVal = Math.max(number + (minDiff??0), Number(e.target.value)))
            }}
            onPointerDown={e => document.addEventListener('pointerup', pointerEndup, true)}
            className={`rs-range ${size}`}
          />
          </div>,
        <div className={`range-slider ${size}`}>
          {getValueLabel(valLoc)}
            <input
              type="range"
              color={color}
              min={min}
              max={max}
              height={getHeight(height, size)}
              step={step}
              value={number}
              onChange={e => {
                e.stopPropagation();
                setNumber(lastVal = Math.min(endNumber - (minDiff??0), Number(e.target.value)))
              }}
              onPointerDown={e => document.addEventListener('pointerup', pointerup, true)}
              className={`rs-range ${size}`}
            />
          </div>
          ]
    } else {
      return ([
        <div className={`range-slider ${size}`}>
          {getValueLabel(valLoc)}
          <input 
            className={`rs-range ${size}`}
            type="range" 
            step={step}
            defaultValue={number}
            min={min}
            max={max}
            draggable={false}
            onPointerDown={e => document.addEventListener('pointerup', pointerup, true)}
            onChange={e => {
              e.stopPropagation();
              setNumber(lastVal = +e.target.value);
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

