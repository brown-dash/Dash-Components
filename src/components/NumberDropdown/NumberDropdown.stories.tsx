import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { INumberDropdownProps, NumberDropdown } from './NumberDropdown'
import { Size } from '../../global'

export default {
  title: 'Dash/NumberDropdown',
  component: NumberDropdown,
  argTypes: {},
} as Meta<typeof NumberDropdown>

// const [number, setNumber] = useState<number>(0)

const Template: Story<INumberDropdownProps> = (args) => <NumberDropdown {...args} />
export const NumberInputOne = Template.bind({})
NumberInputOne.args = {
  min: 0,
  max: 50,
  step: 1,
  // number: number,
  // setNumber: setNumber,
  width: 100,
  height: 100,
  size: Size.SMALL,
  numberDropdownType: 'slider'
}

export const NumberInputTwo = Template.bind({})
NumberInputTwo.args = {
  min: 0,
  max: 50,
  step: 2,
  numberDropdownType: 'dropdown'
}
