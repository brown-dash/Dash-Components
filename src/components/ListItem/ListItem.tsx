import { useState } from 'react'
import React from 'react'
import { Colors, FontSize, Size } from '../../global/globalEnums'
import { Button } from '../Button'
import './ListItem.scss'
import * as fa from 'react-icons/fa'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox'
import { ILocation, isDark } from '../../global'
import Measure from 'react-measure'

export interface IListBoxItemProps {
  ind?: number
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
export const ListItem = (props: IListBoxItemProps) => {
  const {
    ind,
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
    toggleOverlay,
  } = props

  const [location, setLocation] = useState<ILocation>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const onToggleClick = () => {
    items &&
      toggleOverlay &&
      toggleOverlay(
        'listItem' + { text },
        location,
        <ListBox
          items={items}
          backgroundColor={backgroundColor}
          setSelectedItem={setSelectedItem}
        />
      )
  }

  return (
    <Measure
      bounds
      onResize={(r: any) => {
        setLocation({
          top: r.bounds.top,
          left: r.bounds.left,
          width: r.bounds.width,
          height: r.bounds.height,
          override: 'right',
        })
      }}
    >
      {({ measureRef }) => (
        <div
          className="listItem-container"
          ref={measureRef}
          onClick={(e: React.MouseEvent) => {
            onClick && onClick()
            onClick && e.stopPropagation()
            items && onToggleClick()
          }}
          style={{
            background: selected ? Colors.LIGHT_BLUE : undefined,
            color: selected ? Colors.BLACK : undefined,
          }}
        >
          <div className="listItem-top">
            {
              <div className={'button'}>
                <Button icon={icon} text={text} fontSize={FontSize.SECONDARY} padding={0} />
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
          {description && (
            <div className="listItem-description">{description}</div>
          )}
        </div>
      )}
    </Measure>
  )
}
