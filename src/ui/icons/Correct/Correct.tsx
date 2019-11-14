import React from 'react'
import { styled, withTheme, ThemeProps, Theme } from 'ui/theme'
import Svg, { Path } from 'react-native-svg'

export const Correct = withTheme(({ theme }: ThemeProps<Theme>) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.03 16.925l.041.041-1.414 1.415L5 12.724l1.414-1.415 4.201 4.201L19.125 7l1.415 1.414-8.51 8.51z"
      fill={theme.pallete.nero.nero}
    />
  </Svg>
))
