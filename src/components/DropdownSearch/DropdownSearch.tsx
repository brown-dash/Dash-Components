import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import { EditableText, Popup, PopupTrigger } from '..'
import { IGlobalProps, Placement, Size, getHeight } from '../../global'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { IListItemProps } from '../ListItem'
import './DropdownSearch.scss'

export enum DropdownSearchType {
  SELECT = "select",
  CLICK = "click"
}

export interface IDropdownSearchProps extends IGlobalProps {
  items: IListItemProps[]
  placement: Placement
  dropdownSearchType: DropdownSearchType
  title?: string
  selectedVal?: string | number
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
    dropdownSearchType,
    selectedVal,
    // setSelectedVal,
    tooltip,
    title = "DropdownSearch",
    type, 
    width
  } = props

  // const [selectedItem, setSelectedItem] = useState<
  //   IListItemProps | undefined
  // >(selectedVal)

  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  const getToggle = () => {
    switch (dropdownSearchType) {
      case DropdownSearchType.SELECT:
        return (<div
            className={`dropdownsearch-toggle ${type}`}
            style={{ height: getHeight(height, size), width: width }}
            onClick={(e) => {
              e.stopPropagation()
              !isEditing && setIsEditing(true)
            }}
          >
            {/* {selectedItem && !isEditing ? (
              <ListItem {...selectedItem} inactive />
            ) : ( */}
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
            {/* )} */}
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
            // selectedVal={selectedVal}
            // setSelectedVal={setSelectedItem}
            size={size}
          />
        } 
        />
    </div>
  )
}
