import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ISliderProps, Slider } from './Slider'

export default {
  title: 'Dash/Slider',
  component: Slider,
  argTypes: {},
} as Meta<typeof Slider>

const Template: Story<ISliderProps> = (args) => <Slider {...args} />
export const Primary = Template.bind({})
Primary.args = {}
