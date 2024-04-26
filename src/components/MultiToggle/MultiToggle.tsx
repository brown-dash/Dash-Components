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
    noOpen?: boolean;
}

export const MultiToggle = (props: IMultiToggleProps) => {
    const [selectedValLoc, setSelectedValLoc] = useState(props.items.length > 0 ? props.items[0].val : null);
    const { items, selectedVal = selectedValLoc, tooltip, tooltipPlacement = 'top', setSelectedVal = setSelectedValLoc, color } = props;
    const itemsMap = new Map();
    items.forEach((item) => itemsMap.set(item.val, item));
    return <div className={`multiToggle-container`}>
        <Popup
            toggle={<IconButton
                color={color}
                label={props.label}
                {...itemsMap.get(selectedVal)}
                tooltip={tooltip}
                tooltipPlacement={tooltipPlacement}
            />}
            noOpen={props.noOpen}
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