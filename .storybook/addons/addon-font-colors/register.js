// /my-addon/src/register.js

import React from 'react'
import { addons, types } from '@storybook/addons'

import { ColorsButton } from './src/button'

const ADDON_ID = 'storybook/colors'
const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: 'Colors',
    render: () => <ColorsButton />,
  })
})
