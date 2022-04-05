import { useState } from 'react'
import React from 'react';
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './ListBox.scss'
import * as fa from 'react-icons/fa'

export interface IListBoxItem {
  val: any,
  text?: string,
  shortcut?: string,
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
                        {<div className={'button'}><Button
                primaryColor={Colors.TRANSPARENT}
                color={Colors.BLACK}
                icon={item.icon}
                text={item.text}
                padding={0}
                onClick={() => {
                    setIsOpen(false)
                    onSelect(item.val)
                    setSelectedItem && setSelectedItem(item)
                }}
            /></div>}
            {item.shortcut && <div className='shortcut'>
                {item.shortcut}
            </div>}
            {item.items && 
            <div className={'caret'}>
                <fa.FaCaretRight/>
            </div>}
            {item.items && <div className='sub-list'>
                <ListBox items={item.items} isOpen={true} setIsOpen={() => {}} onSelect={onSelect}/>
            </div>}
                    </div>
                )
            }
            return (
            <div key={item.text! + ind} className='list-item'>
                {<div className={'button'}><Button
                primaryColor={Colors.TRANSPARENT}
                color={Colors.BLACK}
                icon={item.icon}
                text={item.text}
                padding={0}
                onClick={() => {
                    setIsOpen(false)
                    onSelect(item.val)
                    setSelectedItem && setSelectedItem(item)
                }}
            /></div>}
            {item.shortcut && <div className='shortcut'>
                {item.shortcut}
            </div>}
            {item.items && 
            <div className={'caret'}>
                <fa.FaCaretRight/>
            </div>}
            {item.items && <div className='sub-list'>
                <ListBox items={item.items} isOpen={true} setIsOpen={() => {}} onSelect={onSelect}/>
            </div>}
            </div>
            )
        } else {
            return (null)
        }
    } else {    
        if (item === selectedItem) {
            return (
                <div key={item.text! + ind} className='list-item' style={{backgroundColor: Colors.MEDIUM_BLUE}}>
                        {<div className={'button'}><Button
                    primaryColor={Colors.TRANSPARENT}
                    color={Colors.BLACK}
                    icon={item.icon}
                    text={item.text}
                    padding={0}
                    onClick={() => {
                        setIsOpen(false)
                        onSelect(item.val)
                        setSelectedItem && setSelectedItem(item)
                    }}
                /></div>}
                {item.shortcut && <div className='shortcut'>
                    {item.shortcut}
                </div>}
                {item.items && 
                <div className={'caret'}>
                    <fa.FaCaretRight/>
                </div>}
                {item.items && <div className='sub-list'>
                    <ListBox items={item.items} isOpen={true} setIsOpen={() => {}} onSelect={onSelect}/>
                </div>}               
                </div>
            )
        }
        return (
        <div key={item.text! + ind} className='list-item'>
            {<div className={'button'}><Button
                primaryColor={Colors.TRANSPARENT}
                color={Colors.BLACK}
                icon={item.icon}
                text={item.text}
                padding={0}
                onClick={() => {
                    setIsOpen(false)
                    onSelect(item.val)
                    setSelectedItem && setSelectedItem(item)
                }}
            /></div>}
            {item.shortcut && <div className='shortcut'>
                {item.shortcut}
            </div>}
            {item.items && 
            <div className={'caret'}>
                <fa.FaCaretRight/>
            </div>}
            {item.items && <div className='sub-list'>
                <ListBox items={item.items} isOpen={true} setIsOpen={() => {}} onSelect={onSelect}/>
            </div>}
        </div>
        )
    }
  })

  return (
    isOpen ? <div className="listBox-container">
        <div
          className={'listBox-popup'}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {itemElements}
        </div>
    </div> : (null)
  )
}
