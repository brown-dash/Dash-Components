import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors, Size } from '../../global/globalEnums';
import * as fa from 'react-icons/fa'
import { IListBoxItemProps } from '../ListItem';
import { FormInput, IFormInputProps } from './FormInput';
import { IconButton } from '../IconButton';

export default {
  title: 'Dash/Text Input',
  component: FormInput,
  argTypes: {},
} as Meta<typeof FormInput>;

const Template: Story<IFormInputProps> = (args) => <FormInput {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Hello World!',
    initialIsOpen: true,
};