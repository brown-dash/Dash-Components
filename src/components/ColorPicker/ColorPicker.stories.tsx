import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { Type , getFormLabelSize } from '../../global'
import { ColorPicker, IColorPickerProps } from './ColorPicker'

export default {
  title: 'Dash/Color Picker',
  component: ColorPicker,
  argTypes: {},
} as Meta<typeof ColorPicker>

const Template: Story<IColorPickerProps> = (args) => <ColorPicker {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Background',
  icon: <fa.FaPaintBrush />,
  type: Type.PRIM,
  onChange: (color) => {
    console.log(color)
  },
  defaultPickerType: "Slider",
  color: "black",
  tooltip: 'Choose your color'
}

export const Icon = Template.bind({})
Icon.args = {
  icon: <fa.FaPaintBrush />,
  type: Type.SEC,
  onChange: (color) => {
    console.log(color)
  },
  color: "black",
  tooltip: 'Choose your color'
}
