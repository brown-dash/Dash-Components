import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '..';
import { Colors } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'

export default {
  title: 'Dash/Button',
  component: Button,
  argTypes: {
  },
} as Meta<typeof Button>;

const Template: Story<IButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {},
    text: 'Fill',
    type: 'fill'
};

export const Secondary = Template.bind({});
Secondary.args = {
    onClick: () => {},
    text: "Outline",
    primaryColor: Colors.BLACK,
    type: 'outline' 
};

export const Ripple = Template.bind({});
Ripple.args = {
    onClick: () => {},
    text: "Ripple",
    primaryColor: Colors.BLACK,
    type: 'outline',
    icon: <fa.FaAccusoft/>,
    ripple: true,
    rounded: true
};