import { Meta, Story } from '@storybook/react'
import React from 'react'
import * as bi from 'react-icons/bi'
import { IconButton } from '../IconButton'
import { Dropdown } from '../Dropdown'
import { IGroupProps, Group } from './Group'
import { Borders } from '../../global'
import { ButtonType } from '../Button'
import { Popup, PopupTrigger } from '../Popup'

export default {
  title: 'Dash/Group',
  component: Group,
  argTypes: {},
} as Meta<typeof Group>

const Template: Story<IGroupProps> = (args) => (
  <Group {...args}>
    <IconButton
      icon={<bi.BiAddToQueue />}
      type={ButtonType.SEC}
    />
    <IconButton
      icon={<bi.BiPlus />}
      type={ButtonType.SEC}
    />
    <IconButton
      icon={<bi.BiAlarmSnooze />}
      type={ButtonType.SEC}
    />
    <IconButton
      icon={<bi.BiAlarmAdd />}
      type={ButtonType.SEC}
    />
    <IconButton
      icon={<bi.BiAlarmExclamation />}
      type={ButtonType.SEC}
    />
    <Popup
      icon={<bi.BiBookOpen />}
      trigger={PopupTrigger.HOVER}
      popup={
        <Group gap={10} width={150}>
          <IconButton
            icon={<bi.BiAddToQueue />}
            type={ButtonType.SEC}
          />
          <IconButton
            icon={<bi.BiPlus />}
            type={ButtonType.SEC}
          />
          <IconButton
            icon={<bi.BiAlarmSnooze />}
            type={ButtonType.SEC}
          />
          <IconButton
            icon={<bi.BiAlarmAdd />}
            type={ButtonType.SEC}
          />
          <IconButton
            icon={<bi.BiAlarmExclamation />}
            type={ButtonType.SEC}
          />
        </Group>
      }
    />
  </Group>
)
export const Primary = Template.bind({})
Primary.args = {
  orientation: 'hor',
}
