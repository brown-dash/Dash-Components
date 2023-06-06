import React from 'react'
import { IListItemProps, ListItem } from '../ListItem'
import './ListBox.scss'
import { IGlobalProps } from '../../global'

export interface IListBoxProps extends IGlobalProps {
  items: IListItemProps[]
  filter?: string
  selectedItem?: IListItemProps
  setSelectedItem?: (item: IListItemProps) => void
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
    maxItems,
    selectedItem,
    setSelectedItem,
    filter,
  } = props

  const getListItem = (
    item: IListItemProps,
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
      }}
    >
      {itemElements}
    </div>
  )
}
