import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { Dropdown, DropdownType } from '../Dropdown'
import { IconButton } from '../IconButton'
import { Popup, PopupTrigger } from '../Popup'
import { Group, IGroupProps } from './Group'
import { Type , getFormLabelSize } from '../../global'

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
          description: 'You need to watch out!',
          val: ''
        },
        {
          text: 'Hello',
          description: 'You need to watch out!',
          val: ''
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
      fillWidth
    />
    <IconButton
      icon={<bi.BiAlarmExclamation />}
      type={Type.SEC}
      fillWidth
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
