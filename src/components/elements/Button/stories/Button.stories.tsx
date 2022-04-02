import React, { PropsWithChildren } from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonTypes } from '../Button'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    styleSize: { name: 'Size', control: 'radio', defaultValue: 'small' },
    children: { control: 'text' },
    disabled: { control: 'boolean', defaultValue: true },
    onClick: { action: 'clicked', table: { disable: true } },
  },
} as Meta

const Template: Story<PropsWithChildren<ButtonTypes>> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'PRIMARY ARGS',
  styleType: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'SECONDARY ARGS',
  styleType: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'TERTIARY ARGS',
  styleType: 'success',
}

export const Quateriary = Template.bind({})
Quateriary.args = {
  children: 'QUATERIARY ARGS',
  styleType: 'error',
}
