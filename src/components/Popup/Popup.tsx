import React, { useRef, useState } from 'react'
import { getHeight, Borders, Size, ILocation } from '../../global'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { ListBox } from '../ListBox/ListBox'
import { IListBoxItemProps } from '../ListItem'
import './Popup.scss'
import Measure from 'react-measure'
import ReactDOM from 'react-dom'

export interface IPopupProps {
  text?: string
  icon: JSX.Element | string
  location?: 'left' | 'right' | 'below' | 'above'
  size?: Size
  height?: number
  popup?: JSX.Element
}

/**
 *
 * @param props
 * @returns
 *
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const Popup = (props: IPopupProps) => {
  const {
    text,
    size,
    icon,
    popup
  } = props
  const [isOpen, setOpen] = useState<boolean>(false)
  const toggleRef = useRef<HTMLDivElement>(null);

  const getToggle = () => {
      return (
        <Button
          size={Size.SMALL}
          text={text}
          icon={icon}
          type={'outline'}
        />
      )
  }

  const toggleOpen = () => {
    setOpen(!isOpen);
    console.log(isOpen);
    if (isOpen) {
      const overlay = document.getElementById("browndashComponents-overlay");
      if (overlay && popup) {
        console.log("create portal");
        ReactDOM.createPortal(popup, overlay);
      }
    } else {

    }
  }

  return (
    <div>
      <div
        className="toggle-container"
        ref={toggleRef}
      >
        <div
          className="toggle"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleOpen();
          }}
        >
          {getToggle()}
        </div>
      </div>
    </div>
  )
}
