import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '../components';

export default {
  title: 'Marbella/Button',
  component: Button,
  argTypes: {
  },
} as Meta<typeof Button>;

const Template: Story<IButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {},
    text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    onClick: () => {},
     text: "Secondary",
};