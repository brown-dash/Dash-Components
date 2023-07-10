import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Colors, Size } from '../../global/globalEnums'
import * as fa from 'react-icons/fa'
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
  onChange: (color) => {
    console.log(color)
  },
  color: "#F9F6F2",
  tooltip: 'Choose your color'
}

export const Icon = Template.bind({})
Icon.args = {
  icon: <fa.FaPaintBrush />,
  onChange: (color) => {
    console.log(color)
  },
  color: "#F9F6F2",
  tooltip: 'Choose your color'
}
