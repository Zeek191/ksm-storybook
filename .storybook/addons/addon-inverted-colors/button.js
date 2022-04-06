import React from 'react'
import { useGlobals } from '@storybook/api'
import { IconButton, Icons } from '@storybook/components'

export default function AddonInvertedColorsButton() {
  const [globals, setGlobals] = useGlobals()

  const isInverted = globals?.isInverted || false

  function toggleInvertion() {
    return setGlobals({ isInverted: !isInverted })
  }

  return (
    <IconButton active={isInverted} onClick={toggleInvertion}>
      <Icons icon="bell" />
    </IconButton>
  )
}
