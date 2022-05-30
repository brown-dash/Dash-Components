import React, { useState } from 'react'
import { Borders, Size } from '../../global/globalEnums'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox/ListBox'
import { IListBoxItemProps } from '../ListItem'
import './PopupList.scss'

export interface IPopupListProps {
  title?: string
  icon: JSX.Element
  items: IListBoxItemProps[]
  toggleBackgroundColor?: string
  boxBackgroundColor?: string
  selected?: IListBoxItemProps
  location: 'left' | 'right' | 'below' | 'above'
  maxItems?: number
  size?: Size
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
    title,
    size,
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

  const getHeight = () => {
    switch (size) {
      case Size.SMALL:
        return 30
      case Size.MEDIUM:
        return 40
      case Size.LARGE:
        return 50
    }
  }

  const getToggle = () => {
    return (
      <div
        className="popupList-toggle"
        style={{ height: getHeight() }}
        onClick={() => setOpen(!isOpen)}
      >
        <IconButton
          size={Size.SMALL}
          hoverStyle="gray"
          icon={icon}
          borderRadius={Borders.STANDARD_BORDER_RADIUS}
        />
      </div>
    )
  }

  return (
    <div
      className="popupList-container"
      style={{
        background: toggleBackgroundColor ? toggleBackgroundColor : undefined,
      }}
    >
      {getToggle()}
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
