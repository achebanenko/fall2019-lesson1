import { ThemeProps as StyledThemeProps } from 'styled-components'
import { Theme as OwnTheme } from './theme'

export { ThemeProvider } from './theme-provider'
export { theme } from './theme'
export { withTheme } from './with-theme'

export { styled } from './styled'
export { styledWeb } from './styled-web'

export type Theme = OwnTheme
export type ThemeProps<T> = StyledThemeProps<T>
