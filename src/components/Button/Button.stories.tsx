import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { Button, ButtonType, IButtonProps, OrientationType } from '..'
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
  type: ButtonType.PRIM
}

export const Secondary = Template.bind({})
Secondary.args = {
  onClick: () => {},
  text: 'Secondary',
  type: ButtonType.SEC
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  onClick: () => {},
  text: 'Tertiary',
  type: ButtonType.TERT
}

export const Small = Template.bind({})
Small.args = {
  onClick: () => {},
  text: 'Small',
  type: ButtonType.PRIM,
  size: Size.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  onClick: () => {},
  text: 'Medium',
  type: ButtonType.PRIM,
  size: Size.MEDIUM,
}

export const Large = Template.bind({})
Large.args = {
  onClick: () => {},
  text: 'Large',
  type: ButtonType.PRIM,
  size: Size.LARGE,
}

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = {
  onClick: () => {},
  text: 'New',
  icon: <bi.BiPlus />,
  iconPosition: OrientationType.LEFT,
  type: ButtonType.PRIM,
}

export const ButtonWithRightIcon = Template.bind({})
ButtonWithRightIcon.args = {
  onClick: () => {},
  text: 'More',
  iconPosition: OrientationType.RIGHT,
  icon: <bi.BiPlus />,
  type: ButtonType.PRIM,
}