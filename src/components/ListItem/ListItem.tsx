import React, { useState } from 'react'
import * as fa from 'react-icons/fa'
import { getFontSize, IGlobalProps, Type , getFormLabelSize } from '../../global'
import { Size } from '../../global/globalEnums'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { Popup, PopupTrigger } from '../Popup'
import './ListItem.scss'

export interface IListItemProps extends IGlobalProps {
  ind?: number
  text?: string
  val: string | number
  icon?: JSX.Element
  description?: string
  shortcut?: string
  items?: IListItemProps[]
  selected?: boolean
  setSelectedVal?: (val: string | number) => unknown
  onClick?: () => void
  uppercase?: boolean
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
    val,
    description,
    text,
    shortcut,
    items,
    icon,
    selected,
    setSelectedVal,
    onClick,
    inactive,
    size = Size.SMALL,
    style,
    color,
    uppercase
  } = props

  const [isHovered, setIsHovered] = useState<boolean>(false);

  let listItem:JSX.Element = (
    <div
      className="listItem-container"
      onClick={(e: React.MouseEvent) => {
        if (!items) {
          onClick && !inactive && onClick()
          onClick && !inactive && e.stopPropagation()
          setSelectedVal && setSelectedVal(val)
        }
      }}
      style={{...style}}
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
          fontSize: getFontSize(size), 
          color: style && style.color ? style.color : color
         }}>
          {icon}
          <div className="text" style={{
            textTransform: uppercase ? 'uppercase' : undefined
          }}>{text}</div>
        </div>
        {shortcut && !inactive && (
          <div 
            className="shortcut"
            color={style && style.color ? style.color : color}
          >
            {shortcut}
          </div>
        )}
        {items && !inactive && (
          <IconButton 
            type={Type.PRIM}
            size={Size.SMALL} 
            icon={<fa.FaCaretRight/>}
            color={style && style.color ? style.color : color}
            inactive
          />
        )}
      </div>
      {description && !inactive && (
        <div className="listItem-description">{description}</div>
      )}
      <div className="listItem-background" 
        style={{
          background: style && style.color ? style.color : color,
          filter: selected ? 'opacity(0.3)' : isHovered && !inactive ? 'opacity(0.2)' : 'opacity(0)'
        }}
      />
    </div>
)

  if (items && !inactive) return <Popup
    placement={'right'}
    toggle={listItem}
    color={color}
    trigger={PopupTrigger.CLICK}
    popup={
      <ListBox color={color} items={items}/>
    }
    fillWidth={true}
  />
  else return <>{listItem}</>
}
