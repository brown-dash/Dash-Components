import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as fa from 'react-icons/fa'
import { IListItemProps } from '../ListItem'
import { IListBoxProps, ListBox } from './ListBox'

export default {
  title: 'Dash/List Box',
  component: ListBox,
  argTypes: {},
} as Meta<typeof ListBox>

const dropdownItems: IListItemProps[] = [
  {
    text: 'Facebook',
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
  },
  {
    text: 'Google',
    shortcut: '⌘G',
    icon: <fa.FaGoogle />
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

const Template: Story<IListBoxProps> = (args) => (
  <ListBox {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  items: dropdownItems  
}
