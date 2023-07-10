import React, { useEffect, useState } from 'react'
import * as fa from 'react-icons/fa'
import { Popup, PopupTrigger, Type } from '..'
import { Colors, IGlobalProps, Placement, getFontSize, getHeight, isDark } from '../../global'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { IListItemProps, ListItem } from '../ListItem'
import './Dropdown.scss'
import { Tooltip } from '@mui/material'

export enum DropdownType {
  SELECT = "select",
  CLICK = "click"
}

export interface IDropdownProps extends IGlobalProps {
  items: IListItemProps[]
  placement?: Placement
  dropdownType: DropdownType
  title?: string
  selected?: IListItemProps
  maxItems?: number,
  color?: string
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
    placement = 'bottom-start',
    tooltip,
    tooltipPlacement = 'top',
    inactive,
    color = Colors.MEDIUM_BLUE,
    title = "Dropdown",
    type, 
    width,
  } = props

  const [selectedItem, setSelectedItem] = useState<
    IListItemProps | undefined
  >(selected)

  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    console.log('rerender component', selected?.text, selectedItem?.text)
  },[selected, selectedItem, active])

  const getBorderColor = (): Colors | string | undefined => {
    switch(type){
      case Type.PRIM:
        return undefined;
      case Type.SEC:
        return color;
      case Type.TERT:
        if (active) return color;
        else return color;
    }
  }

  const defaultProperties: React.CSSProperties = {
    height: getHeight(height, size),
    fontWeight: 500,
    fontSize: getFontSize(size),
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    borderColor: getBorderColor(),
    color: type == (Type.TERT) ? isDark(color) ? Colors.WHITE : Colors.BLACK : color
  }

  const backgroundProperties: React.CSSProperties = {
    background: color
  }

  const getToggle = () => {
    switch (dropdownType) {
      case DropdownType.SELECT:
        return (
          <div
            className={`dropdown-toggle ${type} ${inactive && 'inactive'}`}
            style={{...defaultProperties, height: getHeight(height, size), width: width }}
          >
            {selectedItem && (
              <ListItem size={size} {...selectedItem} style={{ color: defaultProperties.color }} inactive />
            )}
            <div className="toggle-caret">
              <IconButton
                size={size}
                icon={<fa.FaCaretDown />}
                color={defaultProperties.color}
                inactive
              />
            </div>
            <div className={`background ${active && 'active'}`} style={{...backgroundProperties}}/>
          </div>
        )
      case DropdownType.CLICK:
      default:
        return (
          <div
            className={`dropdown-toggle ${type} ${inactive && 'inactive'}`}
            style={{...defaultProperties, height: getHeight(height, size), width: width }}
          >
            <ListItem text={title} size={size} style={{ color: defaultProperties.color }} inactive />
            <div className="toggle-caret">
              <IconButton
                size={size}
                icon={<fa.FaCaretDown />}
                color={defaultProperties.color}
                inactive
              />
            </div>
            <div className={`background ${active && 'active'}`} style={{...backgroundProperties}}/>
          </div>
        )
    }
  }

  return (
    <div
      className="dropdown-container"
    >
      <Popup
        toggle={
          <Tooltip arrow={true} placement={tooltipPlacement} title={selectedItem ? selectedItem.text : title}>
            {getToggle()}
          </Tooltip>
        }
        tooltip={tooltip}
        tooltipPlacement={tooltipPlacement}
        trigger={PopupTrigger.CLICK}
        isOpen={active}
        setOpen={setActive}
        size={size}
        popup={
          <ListBox
            maxItems={maxItems}
            items={items}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            size={size}
          />
        } 
        />
    </div>
  )
}
