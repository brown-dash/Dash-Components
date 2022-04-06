import { useState } from 'react'
import React from 'react';
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './ListBox.scss'
import * as fa from 'react-icons/fa'
import { IconButton } from '../IconButton';

export interface IListBoxItem {
  val: any,
  text?: string,
  shortcut?: string,
  items?: IListBoxItem[],
  icon?: JSX.Element,
  style?: React.CSSProperties
}

export interface IListBoxProps {
  items: IListBoxItem[]
  isOpen: boolean
  filter?: string
  hasShadow?: boolean
  setIsOpen: (bool: boolean) => void
  onSelect: (val: any) => void
  selectedItem?: IListBoxItem
  setSelectedItem?: (item: IListBoxItem) => void
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

  const getListItem = (item: IListBoxItem, ind: number, selected: boolean):JSX.Element | null => {
        return (
            <div key={item.text! + ind} className='list-item' style={{background: selected ? Colors.MEDIUM_BLUE : undefined}}>
                {<div className={'button'}><Button
        primaryColor={Colors.TRANSPARENT}
        color={Colors.BLACK}
        icon={item.icon}
        text={item.text}
        padding={0}
        onClick={() => {
            setIsOpen(false)
            onSelect(item.val)
            setSelectedItem && setSelectedItem(item)
        }}
    /></div>}
    {item.shortcut && <div className='shortcut'>
        {item.shortcut}
    </div>}
    {item.items && 
    <div className={'caret'}>
        <IconButton size={'small'} icon={<fa.FaCaretRight/>}/>
    </div>}
    {item.items && <div className='sub-list'>
        <ListBox items={item.items} isOpen={true} setIsOpen={() => {}} onSelect={onSelect} hasShadow={true}/>
    </div>}
            </div>
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
