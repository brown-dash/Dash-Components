import { useState } from 'react'
import React from 'react';
import * as fa from 'react-icons/fa'
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './Dropdown.scss'
import { IListBoxItem, ListBox } from '../ListBox/ListBox';
import { EditableText } from '..';

export interface IDropdownProps {
  title?: string
  items: IListBoxItem[]
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
  const [selectedItem, setSelectedItem] = useState<IListBoxItem | undefined>(undefined)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)

  const getToggle = () => {
    switch (type) {
      case 'search':
        return <div className="dropdown-toggle">
          <EditableText 
            text={searchTerm}  
            placeholder={'...'}
            editing={true} 
            onEdit={(val) => {
              setSearchTerm(val)
              setOpen(true)
            }}
            setEditing={() => {}}
          />
          <Button icon={<fa.FaSearch/>}/>
        </div> 
      case 'select':
        return <div className="dropdown-toggle">
          <Button icon={selectedItem ? selectedItem.icon : undefined} text={selectedItem ? selectedItem.text : title} onClick={() => setOpen(!isOpen)} />
          <Button icon={<fa.FaCaretDown/>}/>
        </div> 
      default:
        return <div className="dropdown-toggle">
          <Button icon={selectedItem ? selectedItem.icon : undefined} text={selectedItem ? selectedItem.text : title} onClick={() => setOpen(!isOpen)} />
          <Button icon={<fa.FaCaretDown/>}/>
        </div> 
    }
  }

  return (
    <div className="dropdown-container">
      {getToggle()}
      <ListBox isOpen={isOpen} items={items} filter={searchTerm} onSelect={onSelect} setIsOpen={setOpen} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
    </div>
  )
}
