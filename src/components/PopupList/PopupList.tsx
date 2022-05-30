import React, { useState } from 'react'
import { getHeight } from '../../global'
import { Borders, Size } from '../../global/globalEnums'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox/ListBox'
import { IListBoxItemProps } from '../ListItem'
import './PopupList.scss'

export interface IPopupListProps {
  text?: string
  icon: JSX.Element
  items: IListBoxItemProps[]
  toggleBackgroundColor?: string
  boxBackgroundColor?: string
  selected?: IListBoxItemProps
  location: 'left' | 'right' | 'below' | 'above'
  maxItems?: number
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
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<
    IListBoxItemProps | undefined
  >(selected)

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
    <div
      className="popupList-container"
      style={{
        background: toggleBackgroundColor ? toggleBackgroundColor : undefined,
      }}
    >
      <div
        className="popupList-toggle"
        style={{ height: getHeight(height, size) }}
        onClick={() => setOpen(!isOpen)}
      >
        {getToggle()}
      </div>
      <div className="popupList-list">
        <ListBox
          maxItems={maxItems}
          backgroundColor={boxBackgroundColor}
          isOpen={isOpen}
          items={items}
          setIsOpen={setOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  )
}
