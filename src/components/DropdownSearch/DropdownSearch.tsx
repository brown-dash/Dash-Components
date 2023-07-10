import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import { EditableText, OrientationType, Popup, PopupTrigger } from '..'
import { IGlobalProps, Size, getHeight } from '../../global'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { IListItemProps, ListItem } from '../ListItem'
import './DropdownSearch.scss'

export enum DropdownSearchType {
  SELECT = "select",
  CLICK = "click"
}

export interface IDropdownSearchProps extends IGlobalProps {
  items: IListItemProps[]
  location: OrientationType
  dropdownsearchType: DropdownSearchType
  title?: string
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
export const DropdownSearch = (props: IDropdownSearchProps) => {
  const {
    size,
    height,
    maxItems,
    items,
    dropdownsearchType,
    selected,
    tooltip,
    title = "DropdownSearch",
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
    switch (dropdownsearchType) {
      case DropdownSearchType.SELECT:
        return (<div
            className={`dropdownsearch-toggle ${type}`}
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
          </div>);
      case DropdownSearchType.CLICK:
      default:
        return (
          <div
            className={`dropdownsearch-toggle ${type}`}
            style={{ height: getHeight(height, size), width: width }}
          >
            <ListItem text={title} size={size} inactive />
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
      className="dropdownsearch-container"
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
