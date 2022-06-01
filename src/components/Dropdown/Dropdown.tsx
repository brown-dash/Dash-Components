import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import Measure from 'react-measure'
import { EditableText } from '..'
import { Borders, Size, getHeight, ILocation } from '../../global'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
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
  height?: number
  size?: Size
  color?: string
  toggleOverlay?: (
    key: string,
    location: ILocation,
    element: JSX.Element
  ) => void
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
    height,
    maxItems,
    color,
    toggleBackgroundColor,
    boxBackgroundColor,
    items,
    type,
    selected,
    toggleOverlay,
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<
    IListBoxItemProps | undefined
  >(selected)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onItemSelect = (item: IListBoxItemProps) => {
    type == 'select' || ('search' && setSelectedItem(item))
    type == 'search' && setSearchTerm(item.text)
  }

  const getToggle = () => {
    switch (type) {
      case 'search':
        return (
          <div
            className="dropdown-toggle"
            style={{ height: getHeight(height, size), color: color }}
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
            <div className="toggle-caret">
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
            style={{ height: getHeight(height, size) }}
            onClick={() => setOpen(!isOpen)}
          >
            {selectedItem && (
              <div className="toggle-button">
                <ListItem {...selectedItem} preventClick />
              </div>
            )}
            <div className="toggle-caret">
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
            style={{ height: getHeight(height, size) }}
            onClick={() => {
              setOpen(!isOpen)
              toggleOverlay &&
                toggleOverlay(
                  'dropdown1',
                  location,
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
                )
            }}
          >
            {selectedItem && (
              <div className="toggle-button">
                <ListItem {...selectedItem} preventClick />
              </div>
            )}
            <div className="toggle-caret">
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

  const [location, setLocation] = useState<ILocation>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  return (
    <Measure
      bounds
      onResize={(r: any) => {
        setLocation({
          top: r.bounds.top,
          left: r.bounds.left,
          width: r.bounds.width,
          height: r.bounds.height,
        })
      }}
    >
      {({ measureRef }) => (
        <div
          ref={measureRef}
          className="dropdown-container"
          style={{
            background: toggleBackgroundColor
              ? toggleBackgroundColor
              : undefined,
          }}
        >
          {getToggle()}
        </div>
      )}
    </Measure>
  )
}
