import React from 'react'
import { Shadows } from '../../global/globalEnums'
import { IListBoxItemProps, ListItem } from '../ListItem'
import './ListBox.scss'

export interface IListBoxProps {
  items: IListBoxItemProps[]
  isOpen: boolean
  filter?: string
  hasShadow?: boolean
  setIsOpen: (bool: boolean) => void
  selectedItem?: IListBoxItemProps
  setSelectedItem?: (item: IListBoxItemProps) => void
  backgroundColor?: string
  maxItems?: number
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
    isOpen,
    setIsOpen,
    maxItems,
    backgroundColor,
    selectedItem,
    setSelectedItem,
    filter,
    hasShadow,
  } = props

  const getListItem = (
    item: IListBoxItemProps,
    ind: number,
    selected: boolean
  ): JSX.Element => {
    return (
      <ListItem
        key={item.val + ind}
        val={item.val}
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
        itemElements.push(getListItem(item, ind, item === selectedItem))
      }
    } else {
      itemElements.push(getListItem(item, ind, item === selectedItem))
    }
  })
  console.log('maxItems: ', maxItems, itemElements.length)
  return isOpen ? (
    <div
      className="listBox-container"
      style={{
        height:
          maxItems && itemElements.length >= maxItems
            ? maxItems * 30
            : undefined,
        boxShadow: hasShadow ? Shadows.STANDARD_SHADOW : undefined,
        background: backgroundColor ? backgroundColor : undefined,
      }}
    >
      <div
        className={'listBox-popup'}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {itemElements}
      </div>
    </div>
  ) : null
}
