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
    val: "",
    shortcut: '⌘F',
    icon: <fa.FaFacebook />,
    description: 'A hopeless company.'
  },
  {
    text: 'Google',
    val: "",
    shortcut: '⌘G',
    icon: <fa.FaGoogle />
  },
  {
    text: 'Airbnb',
    val: "",
    icon: <fa.FaAirbnb />,
    description: 'A housing service that does not work anymore.'
  },
  {
    text: 'Salesforce',
    val: "",
    icon: <fa.FaSalesforce />,
    items: [
      {
        text: 'Slack',
        val: "",
        icon: <fa.FaSlack />,
      },
      {
        text: 'Heroku',
        val: "",
        shortcut: '⌘H',
        icon: <fa.FaAirFreshener />,
        description: 'A product that used to be brilliant - absolutely fantastic - but then decided to remove its free service.'
      },
    ],
  },
  {
    text: 'Microsoft',
    val: "",
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
