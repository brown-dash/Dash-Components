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
  defaultSelectedItems: "center",
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
  tooltip: "Text Tags",
  label: "Tags",
  defaultSelectedItems : ["left"],
  background: "green",
  color: 'white',
  multiSelect: true,
  items: [
    {
      icon: <FaAlignLeft/>,
      tooltip: 'Like',
      val: "left"
    },
    {
      icon: <FaAlignCenter/>,
      tooltip: 'Todo',
      val: "center"
    },
    {
      icon: <FaAlignRight/>,
      tooltip: 'Idea',
      val: "right"
    },
  ]
}
