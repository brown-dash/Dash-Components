import { useState } from 'react'
import React from 'react';
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './ListBox.scss'
import * as fa from 'react-icons/fa'
import { IconButton } from '../IconButton';
import { IListBoxItemProps, ListItem } from '../ListItem';

export interface IListBoxProps {
  items: IListBoxItemProps[]
  isOpen: boolean
  filter?: string
  hasShadow?: boolean
  setIsOpen: (bool: boolean) => void
  onSelect: (val: any) => unknown
  selectedItem?: IListBoxItemProps
  setSelectedItem?: (item: IListBoxItemProps) => void
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
  const { items, onSelect, isOpen, setIsOpen, selectedItem, setSelectedItem, filter, hasShadow } = props

  const getListItem = (item: IListBoxItemProps, ind: number, selected: boolean):JSX.Element | null => {
        return (
          <ListItem key={item.val + ind} val={item.val} selected={selected} icon={item.icon} text={item.text} shortcut={item.shortcut} items={item.items} onSelect={onSelect}/>
        )
  }

  const itemElements: (JSX.Element | null)[] = items.map((item, ind) => {
    if (filter) {
        if (filter.toLowerCase() === item.text?.substring(0, filter.length).toLowerCase()){
            return getListItem(item, ind, item === selectedItem)
        } else {
            return (null)
        }
    } else {    
        return getListItem(item, ind, item === selectedItem)
    }
  })

  return (
    isOpen ? <div className="listBox-container" style={{boxShadow: hasShadow ? '0px 3px 4px rgba(0, 0, 0, 0.3)' : undefined}}>
        <div
          className={'listBox-popup'}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {itemElements}
        </div>
    </div> : (null)
  )
}
