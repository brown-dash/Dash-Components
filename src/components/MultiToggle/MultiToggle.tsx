import * as React from 'react'
import { IGlobalProps, Type , getFormLabelSize } from '../../global'
import { Popup } from '../Popup'
import { IIconButtonProps, IconButton } from '../IconButton'
import { Group } from '../Group'
import { IToggleProps, Toggle, ToggleType } from '../Toggle'
import { useState } from 'react'

export interface IToggleItemProps extends IToggleProps {
    val: string
}

export interface IMultiToggleProps extends IGlobalProps {
    items: IToggleItemProps[]
    selectedVal?: string,
    setSelectedVal?: (val: string | number) => unknown,
}

export const MultiToggle = (props: IMultiToggleProps) => {
    const [selectedValLoc, setSelectedValLoc] = useState(props.items.length > 0 ? props.items[0].val : null);
    const { items, selectedVal = selectedValLoc, tooltip, tooltipPlacement = 'top', setSelectedVal = setSelectedValLoc, color } = props;
    const itemsMap = new Map();
    items.forEach((item) => {
        itemsMap.set(item.val, item)
    })
    return <div className={`multiToggle-container`}>
        <Popup
            toggle={<IconButton
                color={color}
                {...itemsMap.get(selectedVal)}
                tooltip={tooltip}
                tooltipPlacement={tooltipPlacement}
            />}
            color={color}
            popup={<Group padding={5} color={color} columnGap={0} style={{overflow: 'hidden'}}>
                {items.map((item) => {
                    console.log(item)
                    return <Toggle color={color} icon={item.icon} tooltip={item.tooltip} toggleStatus={selectedVal === item.val} 
                    type={Type.PRIM}
                    toggleType={ToggleType.BUTTON}
                    onClick={() => {
                        setSelectedVal && setSelectedVal(item.val)
                    }}/>
                })}
            </Group>}
        />
    </div>
}