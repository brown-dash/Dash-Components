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
  title: 'Select company',
  boxBackgroundColor: Colors.LIGHT_BLUE,
  maxItems: 3,
  size: Size.SMALL,
  selected: {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
}
