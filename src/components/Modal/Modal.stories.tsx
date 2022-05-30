import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors, Size } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'
import { IListBoxItemProps } from '../ListItem';
import { IModalProps, Modal } from './Modal';
import { IconButton } from '../IconButton';

export default {
  title: 'Dash/Modal',
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

const Template: Story<IModalProps> = (args) => 
  <Modal {...args}>
    <div> HELLO WORLD! </div>
  </Modal>
;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Hello World!',
    initialIsOpen: true,
};