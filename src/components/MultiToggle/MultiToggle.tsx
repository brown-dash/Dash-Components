import * as React from 'react'
import { useState } from 'react'
import { Colors, IGlobalProps, Type } from '../../global'
import { Group } from '../Group'
import { IconButton } from '../IconButton'
import { Popup } from '../Popup'
import { IToggleProps, Toggle, ToggleType } from '../Toggle'

export interface IToggleItemProps extends IToggleProps {
    val: string
}

export interface IMultiToggleProps extends IGlobalProps {
    items: IToggleItemProps[]
    multiSelect?: boolean;
    defaultSelectedVal?: (string|number) | ((string|number)[]),
    selectedVal?: (string | number) | ((string|number)[]),
    setSelectedVal?: (val: (string|number) | (string|number)[]) => unknown,
    isToggle?: boolean;
    toggleStatus?: boolean;
}

function promoteToArrayOrUndefined(d : (string|number)[]|(string|number)|undefined) {
   return d instanceof Array || d === undefined ? d: [d];
}
function promoteToArray(d : (string|number)[]|(string|number)|undefined) {
    return promoteToArrayOrUndefined(d) ?? [];
}

export const MultiToggle = (props: IMultiToggleProps) => {
    let init = true;
    const initVal = (!init ? undefined : promoteToArrayOrUndefined(props.defaultSelectedVal)) ?? promoteToArrayOrUndefined(props.selectedVal) ?? [];
    init = false;

    const [selectedValLoc, setSelectedValLoc] = useState(initVal as (string|number) | ((string|number)[]));
    const { items, selectedVal = selectedValLoc, tooltip, tooltipPlacement = 'top', setSelectedVal = setSelectedValLoc, color } = props;
    const itemsMap = new Map();
    items.forEach((item) => itemsMap.set(item.val, item));
    console.log("Color = ", color)
    return <div className={`multiToggle-container`}>
        <Popup
            toggle={props.isToggle? undefined : <div style={{position: "relative",}}>
                <IconButton
                    color={color}
                    label={props.label}
                    {...(itemsMap.get(promoteToArray(selectedVal)[0]) ?? {})}
                    tooltip={tooltip}
                    tooltipPlacement={tooltipPlacement}
                />
                {promoteToArray(selectedVal).length < 2 ? null : 
                    <div style={{position: "absolute", top: "0", left: "0", color: color ?? Colors.MEDIUM_BLUE}}>
                        +
                    </div>}
            </div>}
            isToggle={props.isToggle}
            toggleFunc={() => {
                const selItem = items.find(item => promoteToArray(selectedVal).includes(item.val));
                selItem && setSelectedVal?.([selItem.val]);
            }}
            type={props.type}
            label={props.isToggle ? props.label : undefined}
            toggleStatus={props.isToggle ? props.toggleStatus : undefined}
            color={color}
            popup={<Group padding={5} color={color} columnGap={0} style={{overflow: 'hidden'}}>
                {items.map((item, i) =>
                    <Toggle key={i} color={color} icon={item.icon} tooltip={item.tooltip}
                        toggleStatus={promoteToArray(selectedVal).includes(item.val)} 
                        type={Type.PRIM}
                        toggleType={ToggleType.BUTTON}
                        onClick={e => {
                            const selected = new Set<string|number>();
                            promoteToArray(selectedVal).forEach(val => val && selected.add(val));
                            if (props.multiSelect && selected.has(item.val)) selected.delete(item.val);
                            else item.val && selected.add(item.val);
                            setSelectedVal?.(props.multiSelect ? Array.from(selected) : item.val);
                            e.stopPropagation();
                        }}/>
                )}
            </Group>}
        />
    </div>
}