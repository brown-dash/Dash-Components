import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import Measure from 'react-measure'
import { getFontSize, IGlobalProps, ILocation } from '../../global'
import { Colors, Size } from '../../global/globalEnums'
import { Button, Type } from '../Button'
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
    onClick,
    inactive,
    size = Size.SMALL,
    style
  } = props

  const [isHovered, setIsHovered] = useState<boolean>(false);

  let listItem:JSX.Element = (
    <div
      className="listItem-container"
      onClick={(e: React.MouseEvent) => {
        if (!items) {
          onClick && !inactive && onClick()
          onClick && !inactive && e.stopPropagation()
        }
      }}
      style={{...style, color: selected ? Colors.BLACK : undefined, }}
      onPointerEnter={() => {
        setIsHovered(true)
      }}
      onPointerLeave={() => {
        setIsHovered(false)
      }}
    >
      <div className="listItem-top">
        <div className="content" 
         style={{
          fontSize: getFontSize(size), color: style?.color
         }}>
          {icon}
          <div className="text">{text}</div>
        </div>
        {shortcut && !inactive && (
          <div className="shortcut">{shortcut}</div>
        )}
        {items && !inactive && (
          <IconButton 
            type={Type.PRIM}
            size={Size.SMALL} 
            icon={<fa.FaCaretRight/>}
            inactive
            color={style?.color}
          />
        )}
      </div>
      {description && !inactive && (
        <div className="listItem-description">{description}</div>
      )}
      <div className="listItem-background" 
        style={{
          filter: selected ? 'opacity(0.4)' : isHovered && !inactive ? 'opacity(0.2)' : 'opacity(0)'
        }}
      />
    </div>
)

  if (items && !inactive) return <Popup
    placement={'right'}
    toggle={listItem}
    trigger={PopupTrigger.CLICK}
    popup={
      <ListBox items={items}/>
    }
  />
  else return <>{listItem}</>
}
