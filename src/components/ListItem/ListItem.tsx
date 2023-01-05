import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import Measure from 'react-measure'
import { getFontSize, IGlobalProps, ILocation } from '../../global'
import { Colors, Size } from '../../global/globalEnums'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { Popup, PopupTrigger } from '../Popup'
import './ListItem.scss'

export interface IListItemProps extends IGlobalProps {
  ind?: number
  text?: string
  icon?: JSX.Element
  description?: string
  shortcut?: string
  items?: IListItemProps[]
  selected?: boolean
  setSelectedItem?: (item: IListItemProps) => void
  onClick?: () => void
}

/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const ListItem = (props: IListItemProps) => {
  const {
    ind,
    description,
    text,
    shortcut,
    items,
    icon,
    selected,
    setSelectedItem,
    onClick,
    inactive,
    size = Size.SMALL
  } = props


  return (
        <div
          className="listItem-container"
          onClick={(e: React.MouseEvent) => {
            onClick && !inactive && onClick()
            onClick && !inactive &&  e.stopPropagation()
          }}
          style={{
            background: selected ? Colors.LIGHT_BLUE : undefined,
            color: selected ? Colors.BLACK : undefined,
          }}
        >
          <div className="listItem-top">
            <div className="content" 
             style={{
              fontSize: getFontSize(size)
             }}>
              {icon}
              {text}
            </div>
            {shortcut && (
              <div className="shortcut">{shortcut}</div>
            )}
            {items && (
              <Popup
                trigger={PopupTrigger.HOVER}
                size={Size.SMALL} icon={<fa.FaCaretRight />} popup={
                  <ListBox items={items}/>
              }/>
            )}
          </div>
          {description && (
            <div className="listItem-description">{description}</div>
          )}
          <div className="listItem-background"></div>
        </div>
  )
}
