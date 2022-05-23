import { useState } from 'react'
import React from 'react';
import { Colors } from '../../global/globalEnums';
import { Button } from '../Button'
import './ListItem.scss'
import * as fa from 'react-icons/fa'
import { IconButton } from '../IconButton';
import { ListBox } from '../ListBox';

export interface IListBoxItemProps {
  val: any,
  text?: string,
  shortcut?: string,
  items?: IListBoxItemProps[],
  selected?: boolean,
  icon?: JSX.Element,
  style?: React.CSSProperties,
  onSelect: (val: any) => unknown
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
  const { val, text, shortcut, items, icon, style, selected, onSelect } = props

        return (
            <div className='list-item' style={{background: selected ? Colors.MEDIUM_BLUE : undefined}}>
                {<div className={'button'}><Button
        primaryColor={Colors.TRANSPARENT}
        color={Colors.BLACK}
        icon={icon}
        text={text}
        padding={0}
        onClick={() => onSelect(props)}
    /></div>}
    {shortcut && <div className='shortcut'>
        {shortcut}
    </div>}
    {items && 
    <div className={'caret'}>
        <IconButton size={'small'} icon={<fa.FaCaretRight/>}/>
    </div>}
    {items && <div className='sub-list'>
        <ListBox items={items} isOpen={true} setIsOpen={() => {}} onSelect={onSelect} hasShadow={true}/>
    </div>}
            </div>
        )
}
