import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import Measure from 'react-measure'
import { EditableText, OrientationType, Popup, PopupTrigger } from '..'
import { Borders, Size, getHeight, ILocation, IGlobalProps } from '../../global'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { IListItemProps, ListItem } from '../ListItem'
import './Dropdown.scss'

export enum DropdownType {
  SEARCH = "search",
  SELECT = "select",
  CLICK = "click"
}

export interface IDropdownProps extends IGlobalProps {
  items: IListItemProps[]
  location: OrientationType
  dropdownType: DropdownType
  selected?: IListItemProps
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
export const Dropdown = (props: IDropdownProps) => {
  const {
    size,
    height,
    maxItems,
    items,
    dropdownType,
    selected,
    type, 
    width
  } = props

  const [selectedItem, setSelectedItem] = useState<
    IListItemProps | undefined
  >(selected)

  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  const getToggle = () => {
    switch (dropdownType) {
      case 'search':
        return (
          <div
            className={`dropdown-toggle ${type}`}
            style={{ height: getHeight(height, size), width: width }}
            onClick={(e) => {
              e.stopPropagation()
              !isEditing && setIsEditing(true)
            }}
          >
            {selectedItem && !isEditing ? (
              <ListItem {...selectedItem} inactive />
            ) : (
              <div className="toggle-button">
                <EditableText
                  type={type}
                  text={searchTerm}
                  placeholder={'...'}
                  editing={true}
                  onEdit={(val) => {
                    setSearchTerm(val)
                  }}
                  size={Size.SMALL}
                  setEditing={setIsEditing}
                />
              </div>
            )}
            <div className="toggle-caret">
              <IconButton
                size={Size.SMALL}
                icon={<fa.FaSearch />}
                inactive
              />
            </div>
            <div className={`toggle-background ${isEditing && 'active'}`}/>
          </div>
        )
      case 'select':
        return (
          <div
            className={`dropdown-toggle ${type}`}
            style={{ height: getHeight(height, size), width: width }}
          >
            {selectedItem && (
              <ListItem size={size} {...selectedItem} inactive />
            )}
            <div className="toggle-caret">
              <IconButton
                size={size}
                icon={<fa.FaCaretDown />}
                inactive
              />
            </div>
            <div className={`toggle-background ${active && 'active'}`}/>
          </div>
        )
      default:
        return (
          <div
            className={`dropdown-toggle ${type}`}
            style={{ height: getHeight(height, size), width: width }}
          >
            {selectedItem && (
              <ListItem {...selectedItem} inactive />
            )}
            <div className="toggle-caret">
              <IconButton
                size={size}
                icon={<fa.FaCaretDown />}
                inactive
              />
            </div>
            <div className={`toggle-background ${active && 'active'}`}/>
          </div>
        )
    }
  }

  return (
    <div
      className="dropdown-container"
    >
      <Popup
        toggle={getToggle()}
        trigger={PopupTrigger.CLICK}
        isOpen={active}
        setOpen={setActive}
        size={size}
        popup={
          <ListBox
            maxItems={maxItems}
            items={items}
            filter={searchTerm}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            size={size}
          />
        } 
        />
    </div>
  )
}
