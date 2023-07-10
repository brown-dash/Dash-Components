import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { Colors, Size } from '../../global/globalEnums'
import { IPopupProps, Popup, PopupTrigger } from './Popup'
import { Overlay } from '../Overlay'

export default {
  title: 'Dash/Popup',
  component: Popup,
  argTypes: {},
} as Meta<typeof Popup>

const Template: Story<IPopupProps> = (args) => (
  <div>
    <Popup {...args}>HELLO WORLD!</Popup>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  icon: <fa.FaEllipsisH />,
  title: 'Select company',
  tooltip: 'Popup tooltip',
  size: Size.SMALL,
  popup: <div style={{background: "pink", padding: 10}}>
    Hello world.
  </div>
}

export const Text = Template.bind({})
Text.args = {
  icon: <fa.FaEllipsisH />,
  text: 'More',
  tooltip: 'Popup',
  size: Size.SMALL,
  popup: <div style={{background: "blue", padding: 10}}>
    This is a popup element.
  </div>
}

export const Hover = Template.bind({})
Hover.args = {
  icon: <fa.FaEllipsisH />,
  trigger: PopupTrigger.HOVER,
  text: 'More',
  tooltip: 'Popup',
  placement: 'right',
  size: Size.SMALL,
  popup: <div style={{background: "blue", padding: 10}}>
    This is a popup element.
  </div>
}
