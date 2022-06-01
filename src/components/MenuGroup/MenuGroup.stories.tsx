import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IconButton } from '../IconButton'
import { Dropdown } from '../Dropdown'
import { IMenuGroupProps, MenuGroup } from './MenuGroup'
import { Borders } from '../../global'

export default {
  title: 'Dash/Menu Group',
  component: MenuGroup,
  argTypes: {},
} as Meta<typeof MenuGroup>

const Template: Story<IMenuGroupProps> = (args) => (
  <MenuGroup {...args}>
    <Dropdown type={'select'} items={[]} location={'below'} />
    <IconButton
      icon={<bi.BiPlus />}
      hoverStyle="gray"
      borderRadius={Borders.STANDARD_BORDER_RADIUS}
    />
  </MenuGroup>
)
export const Primary = Template.bind({})
Primary.args = {
  orientation: 'hor',
}
