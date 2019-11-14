import React from 'react'
import { styled, withTheme, ThemeProps, Theme } from 'ui/theme'
import Svg, { Path } from 'react-native-svg'

export const Accept = withTheme(({ theme }: ThemeProps<Theme>) => (
  <Svg width={16} height={16} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.746 11.543L14.288 4l.943.943-7.542 7.542-.943-.942zm-2.275-.96L11.055 4l.943.943-7.543 7.542-.943-.942.017-.017L.667 8.664l.943-.942 2.861 2.861z"
      fill={theme.pallete.main.turquoise}
    />
  </Svg>
))
