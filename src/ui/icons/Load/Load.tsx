import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { withTheme, ThemeProps, Theme } from 'ui/theme'

type Props = {
  color?: string
} & ThemeProps<Theme>

export const Load = withTheme(({ color, theme }: Props) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 3h1a9 9 0 11-9 9v-1h2v1a7 7 0 107-7h-1V3z"
      fill={color || theme.pallete.nero.nero}
    />
  </Svg>
))
