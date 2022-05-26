import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors, Size } from '../../global/globalEnums';
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
    text: 'hello', 
    placeholder: '...',
    size: Size.MEDIUM,
    editing: true,
    onEdit: (val) => console.log(val),
};

export const Background = Template.bind({});
Background.args = {
    text: 'hello', 
    placeholder: '...',
    size: Size.MEDIUM,
    editing: true,
    backgroundColor: Colors.LIGHT_GRAY,
    onEdit: (val) => console.log(val),
};