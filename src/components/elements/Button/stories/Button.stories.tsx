import React, { PropsWithChildren } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import Button, { ButtonTypes } from '../Button'

import { Title, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    styleSize: { name: 'Size', control: 'radio', defaultValue: 'small' },
    children: { control: 'text' },
    disabled: { control: 'boolean', defaultValue: true },
    onClick: { action: 'clicked', table: { disable: true } },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <p>DOCS</p>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary title={'asdasd as da'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Button>

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
