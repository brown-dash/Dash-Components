import React from 'react'
import { IListItemProps, ListItem } from '../ListItem'
import './ListBox.scss'
import { Colors, IGlobalProps, isDark } from '../../global'

export interface IListBoxProps extends IGlobalProps {
  items: IListItemProps[]
  filter?: string
  selectedVal?: string | number
  setSelectedVal?: (val: string | number) => unknown
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
    selectedVal,
    setSelectedVal,
    filter,
    color
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
        color={color}
        onClick={() => {
          item.onClick && item.onClick()
          setSelectedVal && setSelectedVal(item.val)
        }}
        {...item}
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
          getListItem(item, ind, item.val === selectedVal)
        )
      }
    } else {
      itemElements.push(
        getListItem(item, ind, item.val === selectedVal)
      )
    }
  })
  return (
    <div
      className="listBox-container"
      style={{
        color: color,
        background: isDark(color) ? Colors.LIGHT_GRAY : Colors.DARK_GRAY,
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
