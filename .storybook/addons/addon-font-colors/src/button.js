import React, { useCallback, memo } from 'react'
import { useGlobals } from '@storybook/api'
import { Icons, IconButton } from '@storybook/components'

export const ColorsButton = memo(() => {
  const [globals, updateGlobals] = useGlobals()

  const isInvertedColorsActive = globals['inverted_colors_active'] || false
  const toggleColors = useCallback(
    () =>
      updateGlobals({
        inverted_colors_active: !isInvertedColorsActive,
      }),
    [isInvertedColorsActive]
  )

  return (
    <IconButton key="colors" title="Apply colors to the preview" onClick={toggleColors} active={isInvertedColorsActive}>
      <Icons icon="contrast" />
    </IconButton>
  )
})
