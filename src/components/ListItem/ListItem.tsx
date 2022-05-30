import { useState } from 'react'
import React from 'react'
import { Colors, Size } from '../../global/globalEnums'
import { Button } from '../Button'
import './ListItem.scss'
import * as fa from 'react-icons/fa'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'

export interface IListBoxItemProps {
  val: any
  text?: string
  description?: string
  shortcut?: string
  items?: IListBoxItemProps[]
  selected?: boolean
  icon?: JSX.Element
  style?: React.CSSProperties
  setSelectedItem?: (item: IListBoxItemProps) => void
  onClick?: () => void
  preventClick?: boolean
  backgroundColor?: string
}

/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const ListItem = (props: IListBoxItemProps) => {
  const {
    val,
    description,
    text,
    shortcut,
    items,
    icon,
    style,
    selected,
    setSelectedItem,
    onClick,
    preventClick,
    backgroundColor,
  } = props

  return (
    <div
      className="listItem-container"
      onClick={(e: React.MouseEvent) => {
        onClick && onClick()
        onClick && e.stopPropagation()
      }}
      style={{ background: selected ? Colors.LIGHT_BLUE : undefined }}
    >
      <div className="listItem-top">
        {
          <div className={'button'}>
            <Button
              primaryColor={Colors.TRANSPARENT}
              color={Colors.BLACK}
              icon={icon}
              text={text}
              padding={0}
            />
          </div>
        }
        {!preventClick && shortcut && (
          <div className="shortcut">{shortcut}</div>
        )}
        {!preventClick && items && (
          <div className={'caret'}>
            <IconButton size={Size.SMALL} icon={<fa.FaCaretRight />} />
          </div>
        )}
      </div>
      {description && <div className="listItem-description">{description}</div>}
      {!preventClick && items && (
        <div className="listItem-sublist">
          <ListBox
            items={items}
            isOpen={true}
            setIsOpen={() => {}}
            backgroundColor={backgroundColor}
            setSelectedItem={setSelectedItem}
          />
        </div>
      )}
    </div>
  )
}
