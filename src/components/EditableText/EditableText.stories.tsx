import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'
import { EditableText, IEditableTextProps } from '..';

export default {
  title: 'Dash/Editable Text',
  component: EditableText,
  argTypes: {},
} as Meta<typeof EditableText>;

const Template: Story<IEditableTextProps> = (args) => <EditableText {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {},
    title: 'Current item',
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