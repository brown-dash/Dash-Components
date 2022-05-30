import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { Button, IButtonProps } from '..'
import { Colors, Size } from '../../global/globalEnums'

export default {
  title: 'Dash/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Fill = Template.bind({})
Fill.args = {
  onClick: () => {},
  text: 'Fill',
  type: 'fill',
  backgroundColor: Colors.BLACK,
  color: Colors.WHITE,
}

export const Outline = Template.bind({})
Outline.args = {
  onClick: () => {},
  text: 'Outline',
  hasBorder: true,
  color: Colors.BLACK,
  hoverStyle: 'shadow',
}

export const Gradient = Template.bind({})
Gradient.args = {
  onClick: () => {},
  text: 'Gradient',
  type: 'gradient',
  hoverStyle: 'darken',
  borderRadius: 10,
  color: Colors.WHITE,
  primaryColor: Colors.BLACK,
  secondaryColor: Colors.MEDIUM_BLUE,
}

export const Small = Template.bind({})
Small.args = {
  onClick: () => {},
  text: 'Small',
  type: 'fill',
  hoverStyle: 'darken',
  backgroundColor: Colors.LIGHT_BLUE,
  size: Size.SMALL,
}

export const Medium = Template.bind({})
Medium.args = {
  onClick: () => {},
  text: 'Medium',
  type: 'fill',
  hoverStyle: 'darken',
  backgroundColor: Colors.ERROR_RED,
  size: Size.MEDIUM,
}

export const Large = Template.bind({})
Large.args = {
  onClick: () => {},
  text: 'Large',
  type: 'fill',
  hoverStyle: 'darken',
  backgroundColor: Colors.SUCCESS_GREEN,
  size: Size.LARGE,
}

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = {
  onClick: () => {},
  text: 'New',
  icon: <bi.BiPlus />,
  iconPosition: 'left',
  type: 'fill',
  hoverStyle: 'darken',
  backgroundColor: Colors.SUCCESS_GREEN,
  size: Size.SMALL,
  borderRadius: 10,
}

export const ButtonWithRightIcon = Template.bind({})
ButtonWithRightIcon.args = {
  onClick: () => {},
  text: 'New',
  icon: <bi.BiAddToQueue />,
  iconPosition: 'right',
  type: 'fill',
  hoverStyle: 'gray',
  borderRadius: 10,
  size: Size.SMALL,
}

export const ActiveButton = Template.bind({})
ActiveButton.args = {
  onClick: () => {},
  text: 'New',
  icon: <bi.BiAddToQueue />,
  isActive: true,
  iconPosition: 'right',
  type: 'fill',
  hoverStyle: 'gray',
  borderRadius: 10,
  size: Size.SMALL,
}
