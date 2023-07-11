import * as React from 'react'
import { IGlobalProps, Size, Type } from '../../global'
import { Popup } from '../Popup'
import { Toggle, ToggleType } from '../Toggle'
import { useState } from 'react'
import { Slider } from '../Slider'
import { ListBox } from '../ListBox'
import { IListItemProps } from '../ListItem'
import { Group } from '../Group'
import { IconButton } from '../IconButton'
import * as fa from 'react-icons/fa'


export type NumberDropdownType = 'slider' | 'dropdown' | 'input'

export interface INumberInputProps extends IGlobalProps {
    min: number,
    max: number,
    step?: number,
    number: number
    setNumber?: (num: number) => unknown,
    unit?: string
}

export interface INumberDropdownProps extends INumberInputProps {
    numberDropdownType: NumberDropdownType,
    showPlusMinus: boolean
}

export const NumberDropdown = (props: INumberDropdownProps) => {
    const [numberLoc, setNumberLoc] = useState<number>(0)
    const { numberDropdownType, showPlusMinus, min, max, unit, step = 1, number = numberLoc, setNumber = setNumberLoc, size } = props;
    const [isOpen, setOpen] = useState<boolean>(false);
    let toggle = <Toggle size={size} icon={<>{number.toString()}{unit}</>} toggleType={ToggleType.BUTTON} type={Type.SEC} toggleStatus={isOpen}/>;
    
    if (showPlusMinus) {
        toggle = <Group columnGap={0}>
            <IconButton size={size} icon={<fa.FaMinus/>} onClick={(e) => {
                e.stopPropagation();
                setNumber(number - step);
            }}/>
            {toggle}
            <IconButton size={size} icon={<fa.FaPlus/>} onClick={(e) => {
                e.stopPropagation();
                setNumber(number + step);
            }}/>
        </Group>
    }
    
    let popup;
    switch (numberDropdownType) {
        case 'dropdown':
            let items: IListItemProps[] = [];
            for (let i = min; i <= max; i += step) {
                items.push(
                    {
                        text: i.toString() + unit,
                        style: { textAlign: 'center' }
                    }
                )
            }
            popup = <ListBox items={items} />
            break;
        case 'slider':
        default:
            popup = <Slider size={Size.XSMALL} multithumb={false} min={min} max={max} step={step} number={number} setVal={setNumber}/>
            break;
        case 'input':
            popup = <Slider multithumb={false} min={min} max={max} step={step} number={number}/>
            break;
    }

    return <div className={`numberDropdown-container`}>
        <Popup setOpen={setOpen} placement={'bottom'} isOpen={isOpen} popup={popup} toggle={toggle}/>
    </div>
}