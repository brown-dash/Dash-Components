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
  text?: string
  items: IListItemProps[]
  selected?: IListItemProps
  location: OrientationType
  type: DropdownType
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
    text,
    size,
    height,
    maxItems,
    items,
    type,
    selected,
  } = props
  const [selectedItem, setSelectedItem] = useState<
    IListItemProps | undefined
  >(selected)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const getToggle = () => {
    switch (type) {
      case 'search':
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight(height, size) }}
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
              />
            </div>
          </div>
        )
      case 'select':
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight(height, size) }}
          >
            {selectedItem && (
              <ListItem {...selectedItem} inactive />
            )}
            <div className="toggle-caret">
              <IconButton
                size={Size.SMALL}
                icon={<fa.FaCaretDown />}
              />
            </div>
          </div>
        )
      default:
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight(height, size) }}
          >
            {selectedItem && (
              <ListItem {...selectedItem} inactive />
            )}
            <div className="toggle-caret">
              <IconButton
                size={Size.SMALL}
                icon={<fa.FaCaretDown />}
              />
            </div>
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
        popup={
          <ListBox
            maxItems={maxItems}
            items={items}
            filter={searchTerm}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        } 
        />
    </div>
  )
}
