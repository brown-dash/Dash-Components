import React, { useEffect, useState } from 'react'
import { FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretUp } from 'react-icons/fa'
import { Popup, PopupTrigger } from '..'
import { Colors, IGlobalProps, Placement, Type, getFontSize, getHeight, isDark , getFormLabelSize } from '../../global'
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
  uppercase?: boolean,
  activeChanged?: (isOpen:boolean) => void,
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
    formLabelPlacement,
    fillWidth = true,
    uppercase
  } = props

  const [active, setActive] = useState<boolean>(false)
  const itemsMap = new Map();
  items.forEach((item) => {
    itemsMap.set(item.val, item)
  })

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
    width: fillWidth ? '100%' : width,
    fontWeight: 500,
    fontSize: getFontSize(size),
    fontFamily: 'sans-serif',
    textTransform: uppercase ? 'uppercase' : undefined,
    borderColor: getBorderColor(),
    color: type == (Type.TERT) ? isDark(color) ? Colors.WHITE : Colors.BLACK : color
  }

  const backgroundProperties: React.CSSProperties = {
    background: color
  }

  const getCaretDirection = (): JSX.Element => {
    switch (placement) {
      case 'bottom':
        if (active) return <FaCaretUp/>
        return <FaCaretDown/>
      case 'right':
        if (active) return <FaCaretLeft/>
        return <FaCaretRight/>
      case 'top':
        if (active) return <FaCaretDown/>
        return <FaCaretUp/>
      default: 
        if (active) return <FaCaretUp/>
        return <FaCaretDown/>
    }
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
                icon={getCaretDirection()}
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
                icon={getCaretDirection()}
                color={defaultProperties.color}
                inactive
              />
            </div>
            <div className={`background ${active && 'active'}`} style={{...backgroundProperties}}/>
          </div>
        )
    }
  }
  
  const setActiveChanged = (active:boolean) => {
    setActive(active);
    props.activeChanged?.(active);
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
        setOpen={setActiveChanged}
        size={size}
        fillWidth={true}
        color={color}
        popup={
          <ListBox
            maxItems={maxItems}
            items={items}
            color={color}
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
      <div className={`form-wrapper ${formLabelPlacement}`}
style={{ width: fillWidth ? '100%' : undefined}}>
        <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
        {dropdown}
      </div>
    :
      dropdown
  )
}
