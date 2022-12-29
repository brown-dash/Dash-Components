import React, { useRef, useState } from 'react'
import { getHeight, Borders, Size, ILocation } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox/ListBox'
import { IListBoxItemProps } from '../ListItem'
import './Popup.scss'
import Measure from 'react-measure'

export interface IPopupProps {
  text?: string
  icon: JSX.Element | string
  location?: 'left' | 'right' | 'below' | 'above'
  size?: Size
  height?: number
}

/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const Popup = (props: IPopupProps) => {
  const {
    text,
    size,
    icon
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const toggleRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  // const [location, setLocation] = useState<ILocation>({
  //   top: 0,
  //   left: 0,
  //   width: 0,
  //   height: 0,
  // })

  const getToggle = () => {
      return (
        <Button
          size={Size.SMALL}
          text={text}
          icon={icon}
        />
      )
  }

  return (
    <div>
      <div className="popup-overlay">
        { isOpen &&
          <div className="popup" style={{
            top: top + height,
            left: left,
          }}>Hello world</div>
        }
      </div>
      <div
        className="toggle-container"
        ref={toggleRef}
      >
        <div
          className="toggle"
          style={{ height: getHeight(height, size) }}
          onClick={() => {
            if (toggleRef.current) {
              const boundingBox = toggleRef.current.getBoundingClientRect();
              setTop(boundingBox.y);
              setLeft(boundingBox.x);
              setHeight(boundingBox.height);
              setWidth(boundingBox.width);
            }
            setOpen(!isOpen)
          }}
        >
          {getToggle()}
        </div>
      </div>
    </div>
  )
}
