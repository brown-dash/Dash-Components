import { useState } from 'react'
import React from 'react';
import * as fa from 'react-icons/fa'
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './Dropdown.scss'

export interface IDropdownIconProps {
  val: any,
  text?: string,
  icon?: JSX.Element,
  style?: React.CSSProperties
}

export interface IDropdownProps {
  title?: string
  items: IDropdownIconProps[]
  onSelect: (val: any) => void
  location: 'left' | 'right' | 'below' | 'above'
  iconOnly?: boolean
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
  const { title, onSelect, items, location, iconOnly } = props
  const [isOpen, setOpen] = useState<boolean>(false)

  const itemElements: JSX.Element[] = items.map((item, ind) => {
    return (
      <div key={item.text! + ind} className='list-item'>
        <Button
          primaryColor={Colors.TRANSPARENT}
          textColor={Colors.BLACK}
          icon={item.icon}
          text={iconOnly ? undefined : item.text}
          onClick={() => {
            setOpen(false)
            onSelect(item.val)
          }}
        />
      </div>
    )
  })

  const leftProperties: React.CSSProperties = {
    right: 'calc(100% + 5px)', 
    top: 'calc(100% + 10px)'
  }

  const rightProperties: React.CSSProperties = {
    right: 'calc(100% + 5px)', 
    top: 'calc(100% + 10px)'
  }

  const belowProperties: React.CSSProperties = {
    left: 0, 
    top: 'calc(100% + 10px)'
  }

  const aboveProperties: React.CSSProperties = {
    right: 'calc(100% + 5px)', 
    top: 'calc(100% + 10px)'
  }

  const cssProperties = (): React.CSSProperties => {
    switch (location) {
      case 'left':
        return leftProperties
      case 'right':
        return rightProperties
      case 'above':
        return aboveProperties
      default:
        return belowProperties
    }
  }

  return (
    <div className="dropdown-container">
      <Button iconPosition={'right'} icon={<fa.FaCaretDown/>} text={title} rounded={true} onClick={() => setOpen(!isOpen)} />
      {isOpen && (
        <div
          className={'dropdown-popup'}
          style={cssProperties()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {itemElements}
        </div>
      )}
    </div>
  )
}
