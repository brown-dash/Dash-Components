import React from 'react'
import { IListItemProps, ListItem } from '../ListItem'
import './ListBox.scss'
import { IGlobalProps } from '../../global'

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
