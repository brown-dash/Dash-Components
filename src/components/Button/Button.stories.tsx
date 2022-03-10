import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '..';
import { Colors } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'
import * as bi from 'react-icons/bi'

export default {
  title: 'Dash/Button',
  component: Button,
  argTypes: {
  },
} as Meta<typeof Button>;

const Template: Story<IButtonProps> = (args) => <Button {...args}/>;

export const Fill = Template.bind({});
Fill.args = {
    onClick: () => {},
    text: 'Fill',
    type: 'fill'
};

export const Outline = Template.bind({});
Outline.args = {
    onClick: () => {},
    text: "Outline",
    primaryColor: Colors.BLACK,
    type: 'outline' 
};

export const Icon = Template.bind({});
Icon.args = {
    onClick: () => {},
    icon: <bi.BiPlus/>,
    primaryColor: Colors.TRANSPARENT,
    color: Colors.BLACK,
    hoverStyle: 'darken',
    borderRadius: 10,
    type: 'icon'
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