import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Colors, Size } from '../../global/globalEnums'
import * as fa from 'react-icons/fa'
import { Dropdown, IDropdownProps } from '..'
import { IListBoxItemProps } from '../ListItem'

export default {
  title: 'Dash/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />
const dropdownItems: IListBoxItemProps[] = [
  {
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
  {
    text: 'Google',
  },
  {
    text: 'Airbnb',
    icon: <fa.FaAirbnb />,
  },
  {
    text: 'Salesforce',
    icon: <fa.FaSalesforce />,
    items: [
      {
        text: 'Slack',
        icon: <fa.FaSlack />,
      },
      {
        text: 'Heroku',
        shortcut: '⌘H',
        icon: <fa.FaAirFreshener />,
      },
    ],
  },
  {
    text: 'Microsoft',
    icon: <fa.FaMicrosoft />,
  },
]

export const Primary = Template.bind({})
Primary.args = {
  title: 'Select company',
  boxBackgroundColor: Colors.LIGHT_BLUE,
  items: dropdownItems,
  size: Size.SMALL,
  selected: {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
}

export const Search = Template.bind({})
Search.args = {
  type: 'search',
  boxBackgroundColor: Colors.BLACK,
  toggleBackgroundColor: Colors.LIGHT_GRAY,
  title: 'Search company action',
  items: dropdownItems,
  selected: {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
}
