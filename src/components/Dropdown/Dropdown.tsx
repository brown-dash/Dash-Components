import React, { useEffect, useState } from 'react'
import * as fa from 'react-icons/fa'
import { Popup, PopupTrigger } from '..'
import { Colors, IGlobalProps, Placement, Type, getFontSize, getHeight, isDark } from '../../global'
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
  selectedVal?: string,
  setSelectedVal?: (val: string | number) => unknown,
  maxItems?: number,
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
    selectedVal,
    setSelectedVal,
    placement = 'bottom-start',
    tooltip,
    tooltipPlacement = 'top',
    inactive,
    color = Colors.MEDIUM_BLUE,
    title = "Dropdown",
    type, 
    width,
    formLabel,
    formLabelPlacement
  } = props

  const [active, setActive] = useState<boolean>(false)
  const itemsMap = new Map();
  items.forEach((item) => {
    itemsMap.set(item.val, item)
  })

  useEffect(() => {
    console.log('rerender component', selectedVal)
  },[selectedVal, active])

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
            {selectedVal && (
              <ListItem size={size} {...itemsMap.get(selectedVal)} style={{ color: defaultProperties.color }} inactive />
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
            <ListItem val={'title'} text={title} size={size} style={{ color: defaultProperties.color }} inactive />
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

  const dropdown: JSX.Element = 
  (
    <div
      className="dropdown-container"
    >
      <Popup
        toggle={
          <Tooltip arrow={true} placement={tooltipPlacement} title={itemsMap.get(selectedVal) ? itemsMap.get(selectedVal).text : title}>
            {getToggle()}
          </Tooltip>
        }
        placement={placement}
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
            selectedVal={selectedVal}
            setSelectedVal={setSelectedVal}
            size={size}
          />
        } 
        />
    </div>
  )

  return (
    formLabel ? 
      <div className={`form-wrapper ${formLabelPlacement}`}>
        <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
        {dropdown}
      </div>
    :
      dropdown
  )
}
