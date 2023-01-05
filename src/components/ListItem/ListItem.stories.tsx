import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IListItemProps, ListItem } from './ListItem'

export default {
  title: 'Dash/List Item',
  component: ListItem,
  argTypes: {},
} as Meta<typeof ListItem>

const Template: Story<IListItemProps> = (args) => (
  <ListItem {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Hello World!',
  description: 'This is a description...',
  shortcut: '%4',
  
}
