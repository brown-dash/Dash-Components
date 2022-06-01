import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { Colors, Size } from '../../global/globalEnums'
import { IListBoxItemProps } from '../ListItem'
import { IPopupListProps, PopupList } from './PopupList'

export default {
  title: 'Dash/Popup List',
  component: PopupList,
  argTypes: {},
} as Meta<typeof PopupList>

const Template: Story<IPopupListProps> = (args) => <PopupList {...args} />
const PopupListItems: IListBoxItemProps[] = [
  {
    ind: 1,
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
  {
    ind: 2,
    text: 'Google',
  },
  {
    ind: 3,
    text: 'Airbnb',
    icon: <fa.FaAirbnb />,
    description: 'Airbnb was founded in the United Kingdom',
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
