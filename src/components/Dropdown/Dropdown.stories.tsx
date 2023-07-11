import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { Dropdown, DropdownType, IDropdownProps } from '..'
import { Size } from '../../global/globalEnums'
import { IListItemProps } from '../ListItem'
import { Type } from '../../global'

export default {
  title: 'Dash/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />
const dropdownItems: IListItemProps[] = [
  {
    text: 'Facebook Marketplace',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
    description: 'This is the main component that we use in Dash.',
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

export const Select = Template.bind({})
Select.args = {
  title: 'Select company',
  tooltip: "This should be a tooltip",
  type: Type.PRIM,
  dropdownType: DropdownType.SELECT,
  items: dropdownItems,
  size: Size.SMALL,
  selected: {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
}

export const Click = Template.bind({})
Click.args = {
  title: 'Select company',
  type: Type.PRIM,
  dropdownType: DropdownType.CLICK,
  items: dropdownItems,
  size: Size.SMALL,
}
