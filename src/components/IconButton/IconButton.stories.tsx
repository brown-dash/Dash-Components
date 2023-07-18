import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IButtonProps, IconButton } from '..'
import { Type, Size , getFormLabelSize } from '../../global'

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
  type: Type.PRIM,
}

export const Secondary = Template.bind({})
Secondary.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.SEC
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.TERT
}

export const Label = Template.bind({})
Label.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.TERT,
  label: "Button Label"
}

export const XSmall = Template.bind({})
XSmall.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.SEC,
  size: Size.XSMALL,
}

export const Small = Template.bind({})
Small.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.PRIM,
  size: Size.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.PRIM,
  size: Size.MEDIUM,
}

export const Large = Template.bind({})
Large.args = {
  onClick: () => {},
  icon: <bi.BiAngry/>,
  type: Type.PRIM,
  size: Size.LARGE,
}