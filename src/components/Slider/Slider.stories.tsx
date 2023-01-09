import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ISliderProps, Slider } from './Slider'

export default {
  title: 'Dash/Slider',
  component: Slider,
  argTypes: {},
} as Meta<typeof Slider>

const Template: Story<ISliderProps> = (args) => <Slider {...args} />
export const Value = Template.bind({})
Value.args = {
  multithumb: false,
  initialVal: 2,
  min: 0,
  max: 10,
  step: 1,
  minDiff: 0.1,
}

export const MultiThumb = Template.bind({})
MultiThumb.args = {
  multithumb: true,
  initialVal: 2,
  min: 0,
  max: 100,
  step: 0.1,
  minDiff: 0.3,
}
