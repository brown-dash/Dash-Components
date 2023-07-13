import * as React from 'react'
import { Colors, IGlobalProps, Size, Type, getFontSize } from '../../global'
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
    showPlusMinus?: boolean
}

export const NumberDropdown = (props: INumberDropdownProps) => {
    const [numberLoc, setNumberLoc] = useState<number>(0)
    const { 
        fillWidth, 
        numberDropdownType = false, 
        color = Colors.MEDIUM_BLUE, 
        type,
        formLabelPlacement, 
        showPlusMinus, 
        min, 
        max, 
        unit, 
        step = 1, 
        number = numberLoc, 
        setNumber = setNumberLoc, 
        size, 
        formLabel, 
        tooltip } = 
    props;
    const [isOpen, setOpen] = useState<boolean>(false);
    let toggleText = number.toString();
    if (unit) toggleText = toggleText + unit
    let toggle = <Toggle 
        tooltip={tooltip} 
        color={color} 
        fillWidth={fillWidth} 
        type={type} 
        size={size} 
        text={toggleText} 
        toggleType={ToggleType.BUTTON} 
        toggleStatus={isOpen}
    />;
    
    if (showPlusMinus) {
        toggle = <Group columnGap={0} style={{overflow: 'hidden'}}>
            <IconButton 
                size={size} 
                icon={<fa.FaMinus/>} 
                color={color}
                onClick={(e) => {
                    e.stopPropagation();
                    setNumber(number - step);
                }}
                fillWidth={fillWidth}
                tooltip={`Subtract ${step}${unit}`}
            />
            {toggle}
            <IconButton 
                size={size} 
                icon={<fa.FaPlus/>} 
                color={color}
                onClick={(e) => {
                    e.stopPropagation();
                    setNumber(number + step);
                }}
                fillWidth={fillWidth}
                tooltip={`Add ${step}${unit}`}
            />
        </Group>
    }
    
    let popup;
    switch (numberDropdownType) {
        case 'dropdown':
            let items: IListItemProps[] = [];
            for (let i = min; i <= max; i += step) {
                let text = i.toString()
                if (unit) text = i.toString() + unit
                items.push(
                    {
                        text: text,
                        val: i,
                        style: { textAlign: 'center' }
                    }
                )
            }
            popup = <ListBox 
                color={color}
                selectedVal={number} 
                setSelectedVal={(num) => setNumber(num as number)} 
                items={items}
            />
            break;
        case 'slider':
        default:
            popup = <Slider size={Size.SMALL} unit={unit} multithumb={false} min={min} max={max} step={step} number={number} initVal={number} setVal={setNumber}/>
            break;
        case 'input':
            popup = <Slider multithumb={false} min={min} max={max} step={step} number={number}/>
            break;
    }

    const numberDropdown: JSX.Element = <div className={`numberDropdown-container`} style={{width: fillWidth ? '100%' : 'fit-content'}}>
        <Popup setOpen={setOpen} placement={'bottom'} isOpen={isOpen} popup={popup} toggle={toggle} fillWidth={fillWidth}/>
    </div>

    return (
        formLabel ? 
        <div className={`form-wrapper ${formLabelPlacement}`}>
            <div className={'formLabel'} style={{fontSize: getFontSize(size)}}>{formLabel}</div>
            {numberDropdown}
        </div>
        :
        numberDropdown
    )
}