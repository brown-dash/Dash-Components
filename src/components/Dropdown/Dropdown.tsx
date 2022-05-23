import { useState } from 'react'
import React from 'react';
import * as fa from 'react-icons/fa'
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './Dropdown.scss'
import { ListBox } from '../ListBox/ListBox';
import { EditableText } from '..';
import { IconButton } from '../IconButton';
import { IListBoxItemProps, ListItem } from '../ListItem';

export interface IDropdownProps {
  title?: string
  items: IListBoxItemProps[]
  onSelect: (val: any) => void
  location: 'left' | 'right' | 'below' | 'above'
  iconOnly?: boolean
  type: 'search' | 'select' | 'click'
}

/**
 * 
 * @param props 
 * @returns 
 * 
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const Dropdown = (props: IDropdownProps) => {
  const { title, onSelect, items, location, iconOnly, type } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<IListBoxItemProps | undefined>(undefined)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onItemSelect = (item: IListBoxItemProps) => {
    onSelect(item.val)
    setSelectedItem(item)
    type == 'search' && setSearchTerm(item.val)
  }

  const getToggle = () => {
    switch (type) {
      case 'search':
        return <div className="dropdown-toggle" onClick={() => setIsEditing(true)}>
          <div className='button'><EditableText 
            text={searchTerm}  
            placeholder={'...'}
            editing={isEditing} 
            onEdit={(val) => {
              setSearchTerm(val)
              setOpen(true)
            }}
            setEditing={setIsEditing}
          /></div>
          <div className='caret'><IconButton size='small' hoverStyle='gray' icon={<fa.FaSearch/>}/></div>
        </div> 
      case 'select':
        return <div className="dropdown-toggle" onClick={() => setOpen(!isOpen)}>
          {selectedItem && <ListItem {...selectedItem}/>}
          <div className='caret'><IconButton size='small' hoverStyle='gray' icon={<fa.FaCaretDown/>}/></div>
        </div> 
      default:
        return <div className="dropdown-toggle" onClick={() => setOpen(!isOpen)}>
          {selectedItem && <ListItem {...selectedItem}/>}
          <div className='caret'><IconButton size='small' icon={<fa.FaCaretDown/>} hoverStyle='gray' type={'icon'}/></div>
        </div> 
    }
  }

  return (
    <div className="dropdown-container">
      {getToggle()}
      {isOpen && <div className='divider'/>}
      <ListBox isOpen={isOpen} items={items} filter={searchTerm} onSelect={onItemSelect} setIsOpen={setOpen} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
    </div>
  )
}
