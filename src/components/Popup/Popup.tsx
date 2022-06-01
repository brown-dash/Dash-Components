import React, { useState } from 'react'
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
  toggleBorderRadius?: number | string
  toggleBackgroundColor?: string
  boxBackgroundColor?: string
  children?: any
  location?: 'left' | 'right' | 'below' | 'above'
  size?: Size
  height?: number
  toggleOverlay?: (
    key: string,
    location: ILocation,
    element: JSX.Element
  ) => void
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
    height,
    toggleBorderRadius,
    toggleBackgroundColor,
    icon,
    boxBackgroundColor,
    children,
    toggleOverlay,
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [location, setLocation] = useState<ILocation>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const getToggle = () => {
    if (icon && !text) {
      return (
        <IconButton
          borderRadius={toggleBorderRadius}
          size={Size.SMALL}
          backgroundColor={toggleBackgroundColor}
          icon={icon}
        />
      )
    } else if (text) {
      return (
        <Button
          borderRadius={toggleBorderRadius}
          size={Size.SMALL}
          backgroundColor={toggleBackgroundColor}
          text={text}
          icon={icon}
        />
      )
    } else {
      return (
        <IconButton
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
          size={Size.SMALL}
          backgroundColor={toggleBackgroundColor}
        />
      )
    }
  }

  return (
    <Measure
      bounds
      offset
      onResize={(r: any) => {
        setLocation({
          top: r.bounds.top,
          left: r.bounds.left,
          width: r.offset.width,
          height: r.offset.height,
        })
      }}
    >
      {({ measureRef }) => (
        <div
          className="popup-container"
          ref={measureRef}
          style={{
            background: toggleBackgroundColor
              ? toggleBackgroundColor
              : undefined,
          }}
        >
          <div
            className="popup-toggle"
            style={{ height: getHeight(height, size) }}
            onClick={() => {
              toggleOverlay &&
                toggleOverlay(
                  'popup1',
                  location,
                  <div className="popup-box">{children}</div>
                )
              setOpen(!isOpen)
            }}
          >
            {getToggle()}
          </div>
        </div>
      )}
    </Measure>
  )
}
