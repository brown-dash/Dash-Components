import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Colors, Size } from '../../global/globalEnums'
import * as fa from 'react-icons/fa'
import { IListBoxItemProps } from '../ListItem'
import { PopupList, IPopupListProps } from './PopupList'
import { IconButton } from '../IconButton'

export default {
  title: 'Dash/Popup List',
  component: PopupList,
  argTypes: {},
} as Meta<typeof PopupList>

const Template: Story<IPopupListProps> = (args) => <PopupList {...args} />
const PopupListItems: IListBoxItemProps[] = [
  {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
  {
    val: 'google',
    text: 'Google',
  },
  {
    val: 'airbnb',
    text: 'Airbnb',
    icon: <fa.FaAirbnb />,
    description: 'Airbnb was founded in the United Kingdom',
  },
  {
    val: 'salesforce',
    text: 'Salesforce',
    icon: <fa.FaSalesforce />,
    items: [
      {
        val: 'slack',
        text: 'Slack',
        icon: <fa.FaSlack />,
      },
      {
        val: 'heroku',
        text: 'Heroku',
        shortcut: '⌘H',
        icon: <fa.FaAirFreshener />,
      },
    ],
  },
  {
    val: 'microsoft',
    text: 'Microsoft',
    icon: <fa.FaMicrosoft />,
    description: 'Microsoft is a company founded by Bill Gates',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  icon: <fa.FaEllipsisH />,
  title: 'Select company',
  boxBackgroundColor: Colors.LIGHT_BLUE,
  items: PopupListItems,
  maxItems: 3,
  size: Size.SMALL,
  selected: {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
}

export const Text = Template.bind({})
Text.args = {
  icon: <fa.FaEllipsisH />,
  text: 'More',
  boxBackgroundColor: Colors.LIGHT_BLUE,
  items: PopupListItems,
  maxItems: 3,
  size: Size.SMALL,
  selected: {
    val: 'facebook',
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
}
