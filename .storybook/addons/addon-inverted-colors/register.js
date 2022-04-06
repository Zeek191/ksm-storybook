import React from 'react'
import { addons, types } from '@storybook/addons'
import AddonInvertedColorsButton from './button'

addons.register('storybook/invertion', () => {
  addons.add('storybook/invertion/panel', {
    type: types.TOOL,
    title: 'Invertion',
    render: () => <AddonInvertedColorsButton />,
  })
})
