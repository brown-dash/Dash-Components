import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { Colors, Size } from '../../global/globalEnums'
import { IPopupProps, Popup } from './Popup'

export default {
  title: 'Dash/Popup',
  component: Popup,
  argTypes: {},
} as Meta<typeof Popup>

const Template: Story<IPopupProps> = (args) => (
  <Popup {...args}>HELLO WORLD!</Popup>
)

export const Primary = Template.bind({})
Primary.args = {
  icon: <fa.FaEllipsisH />,
  title: 'Select company',
  boxBackgroundColor: Colors.LIGHT_BLUE,
  size: Size.SMALL,
  toggleOverlay: (key, location, ele) => {
    console.log(key, location)
  },
}

export const Text = Template.bind({})
Text.args = {
  icon: <fa.FaEllipsisH />,
  text: 'More',
  boxBackgroundColor: Colors.LIGHT_BLUE,
  size: Size.SMALL,
  toggleOverlay: (key, location, ele) => {
    console.log(key, location)
  },
}
