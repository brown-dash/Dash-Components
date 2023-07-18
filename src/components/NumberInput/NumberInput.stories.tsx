import { Meta, Story } from '@storybook/react'
import React from 'react'
import { INumberInputProps, NumberInput } from './NumberInput'

export default {
  title: 'Dash/NumberInput',
  component: NumberInput,
  argTypes: {},
} as Meta<typeof NumberInput>

const NumberInputStory: Story<INumberInputProps> = (args) => <NumberInput {...args} />
export const NumberInputOne = NumberInputStory.bind({})
NumberInputOne.args = {

}

export const NumberInputTwo = NumberInputStory.bind({})
NumberInputTwo.args = {

}
