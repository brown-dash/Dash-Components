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
  min: -1100.34234234234,
  max: -100.2323423423423,
  number: -190,
  autorangeMinVal: 1,
  autorange: 500,
  decimals: 0,
  step: 1,
  onPointerDown: (e) => console.log("Slider Down"),
  setNumber: (e) => console.log("Set num", e),
  setFinalNumber: (v) => console.log("Slider final:" + v)
}

export const MultiThumb = Template.bind({})
MultiThumb.args = {
  multithumb: true,
  value: 33.333,
  min: 0.3242342,
  max: 100.234234234,
  step: 0.1111,
  decimals: 1,
  minDiff: 15,
  autorangeMinVal: 1,
  autorangeMin: 100,
  autorangeMultiplier: 2,
  onPointerDown: (e) => console.log("Slider Down"),
  setFinalNumber: (v) => console.log("Slider final:" + v),
  setFinalEndNumber: (v) => console.log("Slider end final:" + v)
}
