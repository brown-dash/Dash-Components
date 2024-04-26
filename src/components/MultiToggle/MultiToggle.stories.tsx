import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IMultiToggleProps, MultiToggle } from './MultiToggle'
import { FaAlignLeft, FaAlignCenter, FaAlignJustify, FaAlignRight } from 'react-icons/fa'

export default {
  title: 'Dash/MultiToggle',
  component: MultiToggle,
  argTypes: {},
} as Meta<typeof MultiToggle>

const MultiToggleStory: Story<IMultiToggleProps> = (args) => <MultiToggle {...args} />
export const MultiToggleOne = MultiToggleStory.bind({})
MultiToggleOne.args = {
  tooltip: "Text alignment",
  label: "Alignment",
  items: [
    {
      icon: <FaAlignLeft/>,
      tooltip: 'Align left',
      val: "left"
    },
    {
      icon: <FaAlignCenter/>,
      tooltip: 'Align center',
      val: "center"
    },
    {
      icon: <FaAlignRight/>,
      tooltip: 'Align right',
      val: "right"
    },
    {
      icon: <FaAlignJustify/>,
      tooltip: 'Justify',
      val: "justify"
    },
  ]
}

export const MultiToggleTwo = MultiToggleStory.bind({})
MultiToggleTwo.args = {

}
