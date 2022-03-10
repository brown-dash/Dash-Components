import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'
import { Dropdown, IDropdownProps } from '..';
import { IDropdownIconProps } from '.';

export default {
  title: 'Dash/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args}/>;
const dropdownItems: IDropdownIconProps[] = [
    {
        val: 'hi',
        text: 'Say hello',
        icon: <fa.FaAddressBook/>
    },
    {
        val: 'hi',
        text: 'Say hello',
        icon: <fa.FaAirbnb/>
    }
]

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {},
    title: 'Current item',
    items: dropdownItems
};

export const Secondary = Template.bind({});
Secondary.args = {
    onClick: () => {},
    title: 'Current item',
    items: dropdownItems 
};

export const Ripple = Template.bind({});
Ripple.args = {
    onClick: () => {},
    title: 'Current item',
    items: dropdownItems
};