import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IToggleProps, Toggle, ToggleType } from './Toggle'
import { Type , getFormLabelSize } from '../../global'

export default {
  title: 'Dash/Toggle',
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>

const Template: Story<IToggleProps> = (args) => <Toggle {...args} />

export const Button = Template.bind({})
Button.args = {
  // text: 'Button',
  type: Type.TERT,
  icon: <bi.BiAbacus/>,
  toggleType: ToggleType.BUTTON,
  tooltip: 'Test tooltip'
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  type: Type.SEC,
  toggleType: ToggleType.CHECKBOX
}

export const Switch = Template.bind({})
Switch.args = {
  text: 'Button',
  type: Type.SEC,
  toggleType: ToggleType.SWITCH
}