import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Colors, Size } from '../../global/globalEnums'
import * as fa from 'react-icons/fa'
import { DropdownSearch, DropdownSearchType, IDropdownSearchProps} from './DropdownSearch'
import { IListItemProps } from '../ListItem'
import { Type } from '../Button'

export default {
  title: 'Dash/DropdownSearch',
  component: DropdownSearch,
  argTypes: {},
} as Meta<typeof DropdownSearch>

const Template: Story<IDropdownSearchProps> = (args) => <DropdownSearch {...args} />
const dropdownsearchItems: IListItemProps[] = [
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

export const Select = Template.bind({})
Select.args = {
  title: 'Select company',
  type: Type.PRIM,
  dropdownsearchType: DropdownSearchType.SELECT,
  items: dropdownsearchItems,
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
  dropdownsearchType: DropdownSearchType.CLICK,
  items: dropdownsearchItems,
  size: Size.SMALL,
}
