import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IToggleProps, Toggle, ToggleType } from './Toggle'
import { Type } from '../../global'

export default {
  title: 'Dash/Toggle',
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>

const Template: Story<IToggleProps> = (args) => <Toggle {...args} />

export const Button = Template.bind({})
Button.args = {
  onClick: () => {},
  // text: 'Button',
  toggleStatus: false,
  type: Type.SEC,
  icon: <bi.BiAbacus/>,
  toggleType: ToggleType.BUTTON,
  tooltip: 'Test tooltip'
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  onClick: () => {},
  toggleStatus: false,
  type: Type.SEC,
  toggleType: ToggleType.CHECKBOX
}

export const Switch = Template.bind({})
Checkbox.args = {
  onClick: () => {},
  text: 'Button',
  toggleStatus: false,
  type: Type.SEC,
  toggleType: ToggleType.SWITCH
}