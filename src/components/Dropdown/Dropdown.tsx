import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import { EditableText } from '..'
import { Borders, Size } from '../../global/globalEnums'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox/ListBox'
import { IListBoxItemProps, ListItem } from '../ListItem'
import './Dropdown.scss'

export interface IDropdownProps {
  title?: string
  items: IListBoxItemProps[]
  toggleBackgroundColor?: string
  boxBackgroundColor?: string
  selected?: IListBoxItemProps
  location: 'left' | 'right' | 'below' | 'above'
  type: 'search' | 'select' | 'click'
  maxItems?: number
  size?: Size
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
    title,
    size,
    maxItems,
    toggleBackgroundColor,
    boxBackgroundColor,
    items,
    type,
    selected,
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<
    IListBoxItemProps | undefined
  >(selected)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onItemSelect = (item: IListBoxItemProps) => {
    type == 'select' || ('search' && setSelectedItem(item))
    type == 'search' && setSearchTerm(item.val)
  }

  const getHeight = () => {
    switch (size) {
      case Size.SMALL:
        return 30
      case Size.MEDIUM:
        return 40
      case Size.LARGE:
        return 50
    }
  }

  const getToggle = () => {
    switch (type) {
      case 'search':
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight() }}
            onClick={(e) => {
              e.stopPropagation()
              !isEditing && setIsEditing(true)
              setOpen(true)
            }}
          >
            {selectedItem && !isEditing ? (
              <div className="toggle-button">
                <ListItem {...selectedItem} preventClick />
              </div>
            ) : (
              <div className="toggle-button">
                <EditableText
                  text={searchTerm}
                  placeholder={'...'}
                  editing={true}
                  onEdit={(val) => {
                    setSearchTerm(val)
                    setOpen(true)
                  }}
                  size={Size.SMALL}
                  setEditing={setIsEditing}
                />
              </div>
            )}
            <div className="caret">
              <IconButton
                size={Size.SMALL}
                hoverStyle="gray"
                icon={<fa.FaSearch />}
                borderRadius={Borders.STANDARD_BORDER_RADIUS}
              />
            </div>
          </div>
        )
      case 'select':
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight() }}
            onClick={() => setOpen(!isOpen)}
          >
            {selectedItem && (
              <div className="toggle-button">
                <ListItem {...selectedItem} preventClick />
              </div>
            )}
            <div className="caret">
              <IconButton
                size={Size.SMALL}
                hoverStyle="gray"
                icon={<fa.FaCaretDown />}
                borderRadius={Borders.STANDARD_BORDER_RADIUS}
              />
            </div>
          </div>
        )
      default:
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight() }}
            onClick={() => setOpen(!isOpen)}
          >
            {selectedItem && (
              <div className="toggle-button">
                <ListItem {...selectedItem} preventClick />
              </div>
            )}
            <div className="caret">
              <IconButton
                size={Size.SMALL}
                hoverStyle="gray"
                icon={<fa.FaCaretDown />}
                borderRadius={Borders.STANDARD_BORDER_RADIUS}
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div
      className="dropdown-container"
      style={{
        background: toggleBackgroundColor ? toggleBackgroundColor : undefined,
      }}
    >
      {getToggle()}
      <div className="dropdown-list">
        <ListBox
          maxItems={maxItems}
          backgroundColor={boxBackgroundColor}
          isOpen={isOpen}
          items={items}
          filter={searchTerm}
          setIsOpen={setOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  )
}
