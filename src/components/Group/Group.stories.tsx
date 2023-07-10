import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IconButton } from '../IconButton'
import { Dropdown, DropdownType } from '../Dropdown'
import { IGroupProps, Group } from './Group'
import { Borders } from '../../global'
import { Type } from '../Button'
import { Popup, PopupTrigger } from '../Popup'

export default {
  title: 'Dash/Group',
  component: Group,
  argTypes: {},
} as Meta<typeof Group>

const Template: Story<IGroupProps> = (args) => (
  <Group {...args}>
    <Dropdown 
      items={[
        {
          text: 'Hello',
          description: 'You need to watch out!'
        },
        {
          text: 'Hello',
          description: 'You need to watch out!'
        }
      ]} 
      dropdownType={DropdownType.CLICK}
      type={Type.SEC}
    />
    <IconButton
      icon={<bi.BiAddToQueue />}
      type={Type.SEC}
    />
    <IconButton
      icon={<bi.BiPlus />}
      type={Type.SEC}
    />
    <Popup
      icon={<bi.BiAlarmSnooze />}
      type={Type.SEC}
      popup={<div>HELLO</div>}
    />
    <IconButton
      icon={<bi.BiAlarmAdd />}
      type={Type.SEC}
    />
    <IconButton
      icon={<bi.BiAlarmExclamation />}
      type={Type.SEC}
    />
    <Popup
      icon={<bi.BiBookOpen />}
      trigger={PopupTrigger.CLICK}
      placement={'bottom'}
      popup={
        <Group rowGap={5}>
          <IconButton
            icon={<bi.BiAddToQueue />}
            type={Type.SEC}
          />
          <IconButton
            icon={<bi.BiPlus />}
            type={Type.SEC}
          />
          <IconButton
            icon={<bi.BiAlarmSnooze />}
            type={Type.SEC}
          />
          <IconButton
            icon={<bi.BiAlarmAdd />}
            type={Type.SEC}
          />
          <IconButton
            icon={<bi.BiAlarmExclamation />}
            type={Type.SEC}
          />
        </Group>
      }
    />
  </Group>
)

export const Primary = Template.bind({})
Primary.args = {
  width: '100%'
}
