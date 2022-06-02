import React, { useState } from 'react'
import { getHeight, Borders, Size, ILocation } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox/ListBox'
import { IListBoxItemProps } from '../ListItem'
import './PopupList.scss'
import Measure from 'react-measure'

export interface IPopupListProps {
  text?: string
  icon: JSX.Element
  items: IListBoxItemProps[]
  toggleBackgroundColor?: string
  boxBackgroundColor?: string
  selected?: IListBoxItemProps
  location?: 'left' | 'right' | 'below' | 'above'
  maxItems?: number
  size?: Size
  height?: number
  addToOverlay?: (location: ILocation, element: JSX.Element) => void
}

/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const PopupList = (props: IPopupListProps) => {
  const {
    text,
    size,
    height,
    maxItems,
    toggleBackgroundColor,
    icon,
    boxBackgroundColor,
    items,
    selected,
    addToOverlay,
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<
    IListBoxItemProps | undefined
  >(selected)
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
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
          size={Size.SMALL}
          backgroundColor={toggleBackgroundColor}
          icon={icon}
        />
      )
    } else if (text) {
      return (
        <Button
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
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
      offset
      onResize={(r: any) => {
        setLocation({
          top: r.offset.top,
          left: r.offset.left,
          width: r.offset.width,
          height: r.offset.height,
        })
      }}
    >
      {({ measureRef }) => (
        <div
          className="popupList-container"
          ref={measureRef}
          style={{
            background: toggleBackgroundColor
              ? toggleBackgroundColor
              : undefined,
          }}
        >
          <div
            className="popupList-toggle"
            style={{ height: getHeight(height, size) }}
            onClick={() => {
              setOpen(!isOpen)
            }}
          >
            {getToggle()}
          </div>
          {addToOverlay &&
            addToOverlay(
              location,
              <ListBox
                maxItems={maxItems}
                backgroundColor={boxBackgroundColor}
                items={items}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )}
        </div>
      )}
    </Measure>
  )
}
