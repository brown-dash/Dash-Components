import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '..';
import { Colors, FontSize } from '../../global/globalEnums';
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
    type: 'fill',
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
};

export const Outline = Template.bind({});
Outline.args = {
    onClick: () => {},
    text: "Outline",
    hasBorder: true,
    color: Colors.BLACK,
    hoverStyle: 'shadow'
};

export const Icon = Template.bind({});
Icon.args = {
    height: 40,
    onClick: () => {},
    icon: <bi.BiPlus/>,
    color: Colors.BLACK,
    fontSize: FontSize.HEADER,
    hoverStyle: 'darken',
    borderRadius: 10,
    tooltip: 'Add button',
    label: 'Test'
};

export const Ripple = Template.bind({});
Ripple.args = {
    onClick: () => {},
    text: "Ripple",
    color: Colors.BLACK,
    icon: <fa.FaAccusoft/>,
    hasRipple: true,
    rounded: true
};