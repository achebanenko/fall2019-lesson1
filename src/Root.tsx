import React from 'react'
import { ThemeProvider, theme } from 'ui/theme'
import { App } from './App'

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default Root
