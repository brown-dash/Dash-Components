import React, { useEffect, useRef, useState } from 'react'
import { Colors, getFontSize, getHeight, IGlobalProps, Size , getFormLabelSize, isDark, INumberProps } from '../../global'
import './Slider.scss'

export interface ISliderProps extends INumberProps {
  multithumb: boolean
  autorangeMinVal?: number // minimimum value that min can have when autoranging
  autorangeMinSize?: number // minimum difference between min and max when autoranging
  autorange?: number        // automatically adjust min/max to be +/- autorange/2 around the current value when the thumb is 15% from the min/max, or when the multithumbs are within 20% of the range and the range is bigger than autorange
  endNumber?: number
  setEndNumber?: (newVal: number) => void
  setFinalNumber?: (newVal: number) => void
  setFinalEndNumber?: (newVal: number) => void
  decimals?: number; 
  step?: number
  minDiff?: number
}

let lastVal = 0;  // bcz: WHY do I have to do this??  the pointerdown event locks in the value of 'valLoc' when it's created so need some other way to get the current value to that old handler...
let lastEndVal = 0;

export const Slider = (props: ISliderProps) => {
  const [width, setWidth] = useState<number>(100);
  const [valLoc, setNumberLoc] = useState<number>(props.number??(props.min + (props.max-props.min)/2));
  const [endNumberLoc, setEndNumberLoc] = useState<number>(props.endNumber??(props.min + 2*(props.max-props.min)/3));
  const [min, setMin] = useState<number>(props.min);
  const [max, setMax] = useState<number>(props.max);
  const { 
    formLabel, 
    formLabelPlacement, 
    multithumb, 
    autorange,
    autorangeMinVal,
    autorangeMinSize,
    decimals,
    step = 1, 
    number = valLoc, 
    endNumber = endNumberLoc, 
    minDiff = (max-min)/20, 
    size = Size.SMALL, 
    height, 
    unit, 
    onPointerDown, 
    setNumber, 
    setEndNumber,
    setFinalNumber, 
    setFinalEndNumber,
    color = Colors.MEDIUM_BLUE,
    fillWidth
  } = props

  const toDecimal = (num:number) => decimals !== undefined ? Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals): num;

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
              {toDecimal(locVal)}
            </span>
          </div>)
  }
  const checkAutorange = () => {
    if (autorange) {
      const minval = multithumb ? Math.min(lastVal, lastEndVal) : lastVal;
      const maxval = multithumb ? Math.max(lastVal, lastEndVal) : lastVal;
      const autosize = Math.max(autorangeMinSize??0,(autorange ?? (maxval-minval)))/2;
      if ((Math.abs((minval - min)/(max-min)) < .15) || (Math.abs((max - maxval)/(max-min)) < .15) ||
          (multithumb && maxval - minval < (max-min)/5 && autosize < max-min)
       ) {
        const newminval = autorangeMinVal !== undefined && minval-autosize < autorangeMinVal? autorangeMinVal : minval-autosize;
        setMin(newminval)
        setMax(newminval !== minval ? Math.max(maxval + autosize, newminval +autosize): maxval+autosize )
      }
    }
  }

  const valSlider = (which: string, val:number, onchange: (val:number) => void, setFinal: () => void) => {
    const valPointerup = (e:PointerEvent) => {
        document.removeEventListener('pointerup', valPointerup, true)
        setFinal();
        checkAutorange();
    }
    return (<div key={which} className={`range-slider ${size}`}>
          {getValueLabel(val)}
          <input
            className={`rs-range ${size}`}
            type="range"
            color={color}
            min={min}
            max={max}
            step={step}
            value={val}
            onPointerDown={e => document.addEventListener('pointerup', valPointerup, true)}
            onChange={e => {
              onchange(+e.target.value);
              e.stopPropagation();
            }}
          />
      </div>);
  }
  const onchange = (val:number) => {
      if (autorangeMinVal && val < autorangeMinVal) val = autorangeMinVal;
      setNumber?.(lastVal = Math.min(multithumb ? endNumber - (minDiff??0):Number.MAX_VALUE, val))
      setNumberLoc(lastVal = Math.min(multithumb ? endNumber - (minDiff??0):Number.MAX_VALUE, val))
  }
  const onendchange = (val:number) => {
    setEndNumber?.(lastEndVal = Math.max(number + (minDiff??0), val))
    setEndNumberLoc(lastEndVal = Math.max(number + (minDiff??0), val))
  }
  const Slider:(JSX.Element|null)[] = [
      !multithumb ? (null) : valSlider("end", endNumberLoc,onendchange, () => setFinalEndNumber?.(lastEndVal)),
      valSlider("start", valLoc, onchange, () => setFinalNumber?.(lastVal))
  ];

  const slider: JSX.Element = (
    <div className={`slider-wrapper`} 
      onPointerEnter={e => {
        lastVal = valLoc;
        lastEndVal = endNumberLoc;
      }}
      style={{
        padding: `5px 0px ${getHeight(height, size)}px 0px`,
        width: fillWidth ? '100%' : 'fit-content'
      }}>
      <div className="slider-container" 
            ref={r => {
              r && new ResizeObserver(() => setWidth(+(r?.clientWidth??100))).observe(r);
              setWidth(+(r?.clientWidth??100));
            }} 
            style={{height: getHeight(height, size)}}
            onPointerDown={onPointerDown}
      >
          {Slider}
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
          <div className="box-minmax" style={{ fontSize: getFontSize(size), color }}>
          <span>{toDecimal(min)}{unit}</span>
          <span>{toDecimal(max)}{unit}</span>
        </div>
      </div>
    </div>
  )

  return (
    formLabel ? 
    <div  className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {slider}
    </div>
    :
    slider
)
}

