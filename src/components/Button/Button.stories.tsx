import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { Button, Type, IButtonProps } from '..'
import { Colors, Size } from '../../global/globalEnums'

export default {
  title: 'Dash/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onClick: () => {},
  text: 'Primary',
  type: Type.PRIM,
  style: {
    fontWeight: 600
  },
  tooltip: 'Primary button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  onClick: () => {},
  text: 'Secondary',
  type: Type.SEC,
  tooltip: 'Secondary button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  onClick: () => {},
  text: 'Tertiary',
  type: Type.TERT,
  size: Size.SMALL,
}

export const Small = Template.bind({})
Small.args = {
  onClick: () => {},
  text: 'Small',
  type: Type.PRIM,
  size: Size.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  onClick: () => {},
  text: 'Medium',
  type: Type.PRIM,
  size: Size.MEDIUM,
}

export const Large = Template.bind({})
Large.args = {
  onClick: () => {},
  text: 'Large',
  type: Type.PRIM,
  size: Size.LARGE,
}

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = {
  onClick: () => {},
  text: 'New',
  icon: <bi.BiPlus />,
  iconPosition: 'left',
  type: Type.PRIM,
}

export const ButtonWithRightIcon = Template.bind({})
ButtonWithRightIcon.args = {
  onClick: () => {},
  text: 'More',
  iconPosition: 'right',
  icon: <bi.BiMobile />,
  type: Type.PRIM,
}