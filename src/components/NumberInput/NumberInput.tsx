import * as React from 'react'
import { Colors, INumberProps , Type, getFormLabelSize, getHeight } from '../../global'
import './NumberInput.scss'
import { useState } from 'react'
import { Group } from '../Group'
import { Toggle, ToggleType } from '../Toggle'
import { IconButton } from '../IconButton'
import * as fa from 'react-icons/fa'
import { EditableText } from '../EditableText'

export interface INumberInputProps extends INumberProps {
    showPlusMinus?: boolean
}

export const NumberInput = (props: INumberInputProps) => {
    const [numberLoc, setNumberLoc] = useState<number>(10)
    const { 
        color = Colors.MEDIUM_BLUE, 
        type,
        formLabelPlacement, 
        showPlusMinus, 
        min, 
        max, 
        unit = '', 
        width,
        fillWidth = width ? true : false, 
        step = 1, 
        number = numberLoc, 
        setNumber = setNumberLoc, 
        size, 
        formLabel, 
        tooltip } = 
    props;

    let input = <EditableText
        color={color}
        type={type}
        size={size}
        val={number.toString() + unit}
        // width={getHeight(undefined, size)}
        textAlign={'center'}
        fillWidth={fillWidth}
        width={width && width - (showPlusMinus ? getHeight(undefined, size) * 4 : 0)}
        setVal={val => setNumber(!isNaN(Number(val)) ? Number(val) : number)}
    />;
    
    if (showPlusMinus) {
        input = <Group columnGap={0} style={{overflow: 'hidden'}}>
            {input}
            <IconButton 
                size={size} 
                icon={<fa.FaMinus/>} 
                color={color}
                onClick={(e) => {
                    e.stopPropagation();
                    setNumber(number - step);
                }}
                inactive={number - step < min}
                tooltip={`Subtract ${step}${unit}`}
            />
            <IconButton 
                size={size} 
                icon={<fa.FaPlus/>} 
                color={color}
                onClick={(e) => {
                    e.stopPropagation();
                    setNumber(number + step);
                }}
                inactive={number + step > max}
                tooltip={`Add ${step}${unit}`}
            />
        </Group>
    }


    return (
        formLabel ? 
        <div className={`form-wrapper ${formLabelPlacement}`} style={{ width: fillWidth ? '100%' : undefined}}>
            <div className={'formLabel'} style={{fontSize: getFormLabelSize(size)}}>{formLabel}</div>
            <div className={`numberInput-container`} style={{width: fillWidth ? '100%' : 'fit-content'}}>
                {input}
            </div>
        </div>
        :
        <div className={`numberInput-container`} style={{width: fillWidth ? '100%' : 'fit-content'}}>
            {input}
        </div>
    )
}