import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IModalProps, Modal } from './Modal';

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