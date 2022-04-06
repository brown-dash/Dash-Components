import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors, FontSize } from '../../global/globalEnums';
import * as fa from 'react-icons/fa';
import * as bi from 'react-icons/bi';
import {IIconButtonProps, IconButton} from './IconButton';

export default {
  title: 'Dash/Icon Button',
  component: IconButton,
  argTypes: {
  },
} as Meta<typeof IconButton>;

const Template: Story<IIconButtonProps> = (args) => <IconButton {...args}/>;


export const BasicIcon = Template.bind({});
BasicIcon.args = {
    padding: 0,
    onClick: () => {},
    icon: <bi.BiPlus/>,
    color: Colors.BLACK,
    hoverStyle: 'gray',
};

export const DarkIcon = Template.bind({});
DarkIcon.args = {
    padding: 0,
    onClick: () => {},
    icon: <bi.BiPlus/>,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    hoverStyle: 'lighten',
};

export const LabeledIcon = Template.bind({});
LabeledIcon.args = {
    onClick: () => {},
    label: "Label",
    color: Colors.BLACK,
    icon: <fa.FaAccusoft/>,
    hoverStyle: 'gray',
    hasBorder: true,
};

export const SmallIcon = Template.bind({});
SmallIcon.args = {
    onClick: () => {},
    icon: <fa.FaAddressCard/>,
    size: 'small',
    hoverStyle: 'gray',
};

export const MediumIcon = Template.bind({});
MediumIcon.args = {
    onClick: () => {},
    icon: <fa.FaAddressCard/>,
    size: 'medium',
    hoverStyle: 'gray',
};

export const LargeIcon = Template.bind({});
LargeIcon.args = {
    onClick: () => {},
    icon: <fa.FaAddressCard/>,
    size: 'large',
    hoverStyle: 'gray',
};

export const GradientIcon = Template.bind({});
GradientIcon.args = {
    onClick: () => {},
    icon: <fa.FaAddressCard/>,
    type: 'gradient',
    size: 'medium',
    color: Colors.WHITE,
    hoverStyle: 'darken',
    primaryColor: Colors.BLACK,
    secondaryColor: Colors.MEDIUM_BLUE,
};