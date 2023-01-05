import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { Button, ButtonType, IButtonProps, IconButton, OrientationType } from '..'
import { Colors, Size } from '../../global/globalEnums'

export default {
  title: 'Dash/Icon Button',
  component: IconButton,
  argTypes: {},
} as Meta<typeof IconButton>

const Template: Story<IButtonProps> = (args) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.PRIM
}

export const Secondary = Template.bind({})
Secondary.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.SEC
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.TERT
}

export const XSmall = Template.bind({})
XSmall.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.SEC,
  size: Size.XSMALL,
}

export const Small = Template.bind({})
Small.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.PRIM,
  size: Size.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.PRIM,
  size: Size.MEDIUM,
}

export const Large = Template.bind({})
Large.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: ButtonType.PRIM,
  size: Size.LARGE,
}