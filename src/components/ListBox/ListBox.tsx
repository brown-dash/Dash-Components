import React from 'react'
import { ILocation, isDark } from '../../global'
import { Colors, Shadows } from '../../global/globalEnums'
import { IListBoxItemProps, ListItem } from '../ListItem'
import './ListBox.scss'

export interface IListBoxProps {
  items: IListBoxItemProps[]
  filter?: string
  hasShadow?: boolean
  selectedItem?: IListBoxItemProps
  setSelectedItem?: (item: IListBoxItemProps) => void
  backgroundColor?: string
  maxItems?: number
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
export const ListBox = (props: IListBoxProps) => {
  const {
    items,
    maxItems,
    backgroundColor,
    selectedItem,
    setSelectedItem,
    filter,
    hasShadow,
    toggleOverlay,
  } = props

  const getListItem = (
    item: IListBoxItemProps,
    ind: number,
    selected: boolean
  ): JSX.Element => {
    return (
      <ListItem
        key={ind}
        ind={ind}
        selected={selected}
        setSelectedItem={setSelectedItem}
        icon={item.icon}
        text={item.text}
        description={item.description}
        shortcut={item.shortcut}
        items={item.items}
        backgroundColor={backgroundColor}
        onClick={() => {
          item.onClick && item.onClick()
          setSelectedItem && setSelectedItem(item)
        }}
      />
    )
  }
  let itemElements: JSX.Element[] = []
  items.forEach((item, ind) => {
    if (filter) {
      if (
        filter.toLowerCase() ===
        item.text?.substring(0, filter.length).toLowerCase()
      ) {
        itemElements.push(
          getListItem(item, ind, item.text === selectedItem?.text)
        )
      }
    } else {
      itemElements.push(
        getListItem(item, ind, item.text === selectedItem?.text)
      )
    }
  })
  return (
    <div
      className="listBox-container"
      style={{
        height:
          maxItems && itemElements.length >= maxItems
            ? maxItems * 30
            : undefined,
        boxShadow: hasShadow ? Shadows.STANDARD_SHADOW : undefined,
        background: backgroundColor ? backgroundColor : undefined,
        color: isDark(backgroundColor) ? Colors.WHITE : Colors.BLACK,
      }}
    >
      <div
        className={'listBox-popup'}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {itemElements}
      </div>
    </div>
  )
}
