import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'
import { Dropdown, IDropdownProps } from '..';
import { IListBoxItem } from '../ListBox/ListBox';

export default {
  title: 'Dash/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args}/>;
const dropdownItems: IListBoxItem[] = [
    {
        val: 'facebook',
        text: 'Facebook',
        shortcut: '⌘F',
        icon: <fa.FaFacebook/>
    },
    {
        val: 'google',
        text: 'Google',
    },
    {
        val: 'airbnb',
        text: 'Airbnb',
        icon: <fa.FaAirbnb/>
    },
    {
        val: 'salesforce',
        text: 'Salesforce',
        icon: <fa.FaSalesforce/>,
        items: [
            {
                val: 'slack',
                text: 'Slack',
                icon: <fa.FaSlack/>
            },
            {
                val: 'heroku',
                text: 'Heroku',
                shortcut: 'Cmmd+H',
                icon: <fa.FaAirFreshener/>
            }
        ]
    },
    {
        val: 'microsoft',
        text: 'Microsoft',
        icon: <fa.FaMicrosoft/>
    }
]

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {},
    title: 'Select company',
    items: dropdownItems
};

export const Search = Template.bind({});
Search.args = {
    onClick: () => {},
    type: 'search',
    title: 'Search company action',
    items: dropdownItems 
};