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
  closeOnSelect?: boolean;
  iconProvider?: (active:boolean, placement?:Placement) => JSX.Element,
  selectedVal?: string,
  setSelectedVal?: (val: string | number) => unknown,
  maxItems?: number,
  uppercase?: boolean,
  activeChanged?: (isOpen:boolean) => void,
  onDown?: (e:React.PointerEvent, val:string|number) => void,
  onItemDown?: (e:React.PointerEvent, val:number | string) => void,
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
    iconProvider,
    placement = 'bottom-start',
    tooltip,
    tooltipPlacement = 'top',
    inactive,
    color = Colors.MEDIUM_BLUE,
    background,
    closeOnSelect,
    title = "Dropdown",
    type, 
    width,
    formLabel,
    formLabelPlacement,
    fillWidth = true,
    onItemDown,
    onDown,
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
    background,
    color: color && background? color :  type == (Type.TERT) ? isDark(color) ? Colors.WHITE : Colors.BLACK : color
  }

  const backgroundProperties: React.CSSProperties = {
    background: background ?? color
  }

  const getCaretDirection = (active: boolean, placement:Placement = 'left'): JSX.Element => {
    if (iconProvider) return iconProvider(active, placement);
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
            className={`dropdown-toggle${!selectedVal?"-mini":""} ${type} ${inactive && 'inactive'}`}
            style={{...defaultProperties, height: getHeight(height, size), width: width }}
          >
            {selectedVal && (
              <ListItem size={size} onItemDown={(e,val) => {
                    onDown?.(e, val);
                    closeOnSelect && (setActive(false))
                }} 
                {...itemsMap.get(selectedVal)} 
                style={{ color: defaultProperties.color, background: defaultProperties.background}} 
                inactive 
              />
            )}
            <div className="toggle-caret">
              <IconButton
                size={size}
                icon={getCaretDirection(active,placement)}
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
            className={`dropdown-toggle${!selectedVal?"-mini":""} ${type} ${inactive && 'inactive'}`}
            style={{...defaultProperties, height: getHeight(height, size), width: width }}
          >
            <ListItem val={'title'} onItemDown={(e,val) => {
                    onDown?.(e, val);
                    closeOnSelect && (setActive(false))
                }} 
                text={title} 
                size={size} 
                style={{ color: defaultProperties.color, background: defaultProperties.backdropFilter}} 
                inactive 
            />
            <div className="toggle-caret">
              <IconButton
                size={size}
                icon={getCaretDirection(active,placement)}
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
          <Tooltip disableInteractive={true} arrow={true} placement={tooltipPlacement} title={itemsMap.get(selectedVal) ? itemsMap.get(selectedVal).text : title}>
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
            onItemDown={(e,val) => {
                onItemDown?.(e,val);
                closeOnSelect && setActive(false);
            }}
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
