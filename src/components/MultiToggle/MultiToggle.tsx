import * as React from 'react'
import { useState } from 'react'
import { IGlobalProps, Type } from '../../global'
import { Group } from '../Group'
import { IconButton } from '../IconButton'
import { Popup } from '../Popup'
import { IToggleProps, Toggle, ToggleType } from '../Toggle'

export interface IToggleItemProps extends IToggleProps {
    val: string
}

export interface IMultiToggleProps extends IGlobalProps {
    items: IToggleItemProps[]
    selectedVal?: string,
    setSelectedVal?: (val: string | number) => unknown,
    isToggle?: boolean;
    toggleStatus?: boolean;
}

export const MultiToggle = (props: IMultiToggleProps) => {
    const [selectedValLoc, setSelectedValLoc] = useState(props.items.length > 0 ? props.items[0].val : null);
    const { items, selectedVal = selectedValLoc, tooltip, tooltipPlacement = 'top', setSelectedVal = setSelectedValLoc, color } = props;
    const itemsMap = new Map();
    items.forEach((item) => itemsMap.set(item.val, item));
    return <div className={`multiToggle-container`}>
        <Popup
            toggle={props.isToggle? undefined : <IconButton
                color={color}
                label={props.label}
                {...itemsMap.get(selectedVal)}
                tooltip={tooltip}
                tooltipPlacement={tooltipPlacement}
            />}
            isToggle={props.isToggle}
            toggleFunc={() => {
                const selItem = items.find(item => selectedVal === item.val);
                selItem && setSelectedVal?.(selItem.val);
            }}
            type={props.type}
            label={props.isToggle ? props.label : undefined}
            icon={props.isToggle ? items.find(item => item.val == selectedVal)?.icon : undefined}
            toggleStatus={props.isToggle ? props.toggleStatus : undefined}
            color={color}
            popup={<Group padding={5} color={color} columnGap={0} style={{overflow: 'hidden'}}>
                {items.map((item, i) =>
                    <Toggle key={i} color={color} icon={item.icon} tooltip={item.tooltip}
                        toggleStatus={selectedVal === item.val} 
                        type={Type.PRIM}
                        toggleType={ToggleType.BUTTON}
                        onClick={() => setSelectedVal?.(item.val)}/>
                )}
            </Group>}
        />
    </div>
}