import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ITemplateProps, Template } from './Template'

export default {
  title: 'Dash/Template',
  component: Template,
  argTypes: {},
} as Meta<typeof Template>

const TemplateStory: Story<ITemplateProps> = (args) => <Template {...args} />
export const TemplateOne = TemplateStory.bind({})
TemplateOne.args = {

}

export const TemplateTwo = TemplateStory.bind({})
TemplateTwo.args = {

}
