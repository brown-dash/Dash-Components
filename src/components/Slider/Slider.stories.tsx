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
  min: -1100,
  max: -100,
  number: -200,
  step: 1,
  minDiff: 0.1,
  onPointerDown: (e) => console.log("Slider Down"),
  setNumber: (e) => console.log("Set num", e),
  setFinalNumber: (v) => console.log("Slider final:" + v)
}

export const MultiThumb = Template.bind({})
MultiThumb.args = {
  multithumb: true,
  initialVal: 2,
  min: 0,
  max: 100,
  step: 0.1,
  minDiff: 0.3,
  onPointerDown: (e) => console.log("Slider Down"),
  setFinalNumber: (v) => console.log("Slider final:" + v),
  setFinalEndNumber: (v) => console.log("Slider end final:" + v)
}
