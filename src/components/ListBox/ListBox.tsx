import { useState } from 'react'
import React from 'react';
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './ListBox.scss'

export interface IListBoxItem {
  val: any,
  text?: string,
  items?: IListBoxItem[],
  icon?: JSX.Element,
  style?: React.CSSProperties
}

export interface IListBoxProps {
  items: IListBoxItem[]
  isOpen: boolean
  filter?: string
  setIsOpen: (bool: boolean) => void
  onSelect: (val: any) => void
  selectedItem?: IListBoxItem
  setSelectedItem?: (item: IListBoxItem) => void
}

/**
 * 
 * @param props 
 * @returns 
 * 
 * TODO: add support for isMulti, isSearchable
 * Look at: import Select from "react-select";
 */
export const ListBox = (props: IListBoxProps) => {
  const { items, onSelect, isOpen, setIsOpen, selectedItem, setSelectedItem, filter } = props

  const itemElements: (JSX.Element | null)[] = items.map((item, ind) => {
    if (filter) {
        if (filter.toLowerCase() === item.text?.substring(0, filter.length).toLowerCase()){
            if (item === selectedItem) {
                return (
                    <div key={item.text! + ind} className='list-item'>
                        <Button
                            backgroundColor={Colors.SUCCESS_GREEN}
                            color={Colors.BLACK}
                            icon={item.icon}
                            text={item.text}
                            onClick={() => {
                                setIsOpen(false)
                                onSelect(item.val)
                                setSelectedItem && setSelectedItem(item)
                            }}
                        />
                    </div>
                )
            }
            return (
            <div key={item.text! + ind} className='list-item'>
                <Button
                    primaryColor={Colors.TRANSPARENT}
                    color={Colors.BLACK}
                    icon={item.icon}
                    text={item.text}
                    onClick={() => {
                        setIsOpen(false)
                        onSelect(item.val)
                        setSelectedItem && setSelectedItem(item)
                    }}
                />
            </div>
            )
        } else {
            return (null)
        }
    } else {    
        if (item === selectedItem) {
            return (
                <div key={item.text! + ind} className='list-item'>
                    <Button
                        backgroundColor={Colors.SUCCESS_GREEN}
                        color={Colors.BLACK}
                        icon={item.icon}
                        text={item.text}
                        onClick={() => {
                            setIsOpen(false)
                            onSelect(item.val)
                            setSelectedItem && setSelectedItem(item)
                        }}
                    />
                </div>
            )
        }
        return (
        <div key={item.text! + ind} className='list-item'>
            <Button
                primaryColor={Colors.TRANSPARENT}
                color={Colors.BLACK}
                icon={item.icon}
                text={item.text}
                onClick={() => {
                    setIsOpen(false)
                    onSelect(item.val)
                    setSelectedItem && setSelectedItem(item)
                }}
            />
        </div>
        )
    }
  })

  return (
    <div className="listBox-container">
      {isOpen && (
        <div
          className={'listBox-popup'}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {itemElements}
        </div>
      )}
    </div>
  )
}
