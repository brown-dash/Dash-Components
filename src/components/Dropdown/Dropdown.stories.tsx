import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { Dropdown, DropdownType, IDropdownProps } from '..'
import { Colors, Size } from '../../global/globalEnums'
import { IListItemProps } from '../ListItem'
import { Type , getFormLabelSize } from '../../global'

export default {
  title: 'Dash/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />
const dropdownItems: IListItemProps[] = [
  {
    text: 'Facebook Marketplace',
    val: 'facebook-marketplace',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
    description: 'This is the main component that we use in Dash.',
  },
  {
    text: 'Google',
    val: 'google',
  },
  {
    text: 'Airbnb',
    val: 'airbnb',
    icon: <fa.FaAirbnb />,
  },
  {
    text: 'Salesforce',
    val: 'salesforce',
    icon: <fa.FaSalesforce />,
    items: [
      {
        text: 'Slack',
        val: 'slack',
        icon: <fa.FaSlack />,
      },
      {
        text: 'Heroku',
        val: 'heroku',
        shortcut: '⌘H',
        icon: <fa.FaAirFreshener />,
      },
    ],
  },
  {
    text: 'Microsoft',
    val: 'microsoft',
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
  selectedVal: 'facebook-marketplace',
  background: 'blue',
  color: Colors.WHITE
}

export const Click = Template.bind({})
Click.args = {
  title: '',
  type: Type.TERT,
  color: 'red',
  background: 'blue',
  width: 20,
  height: 20,
  dropdownType: DropdownType.CLICK,
  items: dropdownItems,
  closeOnSelect: true,
  size: Size.SMALL,
  onDown: (e, val) => console.log("DOWN" + val),
  onItemDown: (e, val) => console.log("ITEM DOWN" + val)
  //color: Colors.SUCCESS_GREEN
}
