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

export const Gradient = Template.bind({});
Gradient.args = {
    onClick: () => {},
    text: "Gradient",
    type: 'gradient',
    color: Colors.WHITE,
    primaryColor: Colors.BLACK,
    secondaryColor: Colors.MEDIUM_BLUE,
};

export const Small = Template.bind({});
Small.args = {
    onClick: () => {},
    text: "Small",
    type: 'fill',
    hoverStyle: 'darken',
    backgroundColor: Colors.LIGHT_BLUE,
    size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
    onClick: () => {},
    text: "Medium",
    type: 'fill',
    hoverStyle: 'darken',
    backgroundColor: Colors.ERROR_RED,
    size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
    onClick: () => {},
    text: "Large",
    type: 'fill',
    hoverStyle: 'darken',
    backgroundColor: Colors.SUCCESS_GREEN,
    size: 'large'
};