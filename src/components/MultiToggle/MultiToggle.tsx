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
    defaultSelectedItems?: (string|number) | ((string|number)[]),
    selectedItems?: (string | number) | ((string|number)[]),
    onSelectionChange?: (val: (string|number) | (string|number)[], added: boolean) => unknown,
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
    const initVal = (!init ? undefined : promoteToArrayOrUndefined(props.defaultSelectedItems)) ?? promoteToArrayOrUndefined(props.selectedItems) ?? [];
    init = false;

    const [selectedItemsLocal, setSelectedItemsLocal] = useState(initVal as (string|number) | ((string|number)[]));
    const { items, selectedItems = selectedItemsLocal, tooltip, tooltipPlacement = 'top', onSelectionChange, color } = props;
    const itemsMap = new Map();
    items.forEach((item) => itemsMap.set(item.val, item));
    console.log("Color = ", color)
    return <div className={`multiToggle-container`}>
        <Popup
            toggle={props.isToggle? undefined : <div style={{position: "relative",}}>
                <IconButton
                    color={color}
                    label={props.label}
                    {...(itemsMap.get(promoteToArray(selectedItems)[0]) ?? {})}
                    tooltip={tooltip}
                    tooltipPlacement={tooltipPlacement}
                />
                {promoteToArray(selectedItems).length < 2 ? null : 
                    <div style={{position: "absolute", top: "0", left: "0", color: color ?? Colors.MEDIUM_BLUE}}>
                        +
                    </div>}
            </div>}
            isToggle={props.isToggle}
            toggleFunc={() => {
                const selItem = items.find(item => promoteToArray(selectedItems).includes(item.val));
                selItem && setSelectedItemsLocal([selItem.val]);
            }}
            type={props.type}
            label={props.isToggle ? props.label : undefined}
            toggleStatus={props.isToggle ? props.toggleStatus : undefined}
            color={color}
            popup={<Group padding={5} color={color} columnGap={0} style={{overflow: 'hidden'}}>
                {items.map((item, i) =>
                    <Toggle key={i} color={color} icon={item.icon} tooltip={item.tooltip}
                        toggleStatus={promoteToArray(selectedItems).includes(item.val)} 
                        type={Type.PRIM}
                        toggleType={ToggleType.BUTTON}
                        onClick={e => {
                            const selected = new Set<string|number>();
                            promoteToArray(selectedItems).forEach(val => val && selected.add(val));
                            const toAdd = !props.multiSelect || !selected.has(item.val)
                            if (!toAdd) selected.delete(item.val);
                            else item.val && selected.add(item.val);
                            onSelectionChange?.(item.val, toAdd);
                            setSelectedItemsLocal(props.multiSelect ? Array.from(selected) : item.val);
                            e.stopPropagation();
                        }}/>
                )}
            </Group>}
        />
    </div>
}