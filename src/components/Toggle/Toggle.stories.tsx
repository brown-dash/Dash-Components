import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { Colors, Size } from '../../global/globalEnums'
import { Toggle, IToggleProps, ToggleType } from './Toggle'

export default {
  title: 'Dash/Toggle',
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>

const Template: Story<IToggleProps> = (args) => <Toggle {...args} />

export const Button = Template.bind({})
Button.args = {
  onClick: () => {},
  text: 'Button',
  toggleStatus: false,
  type: ToggleType.BUTTON
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  onClick: () => {},
  text: 'Button',
  toggleStatus: false,
  type: ToggleType.CHECKBOX
}