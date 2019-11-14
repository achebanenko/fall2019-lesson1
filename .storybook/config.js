import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { styled, theme, ThemeProvider } from 'ui/theme'

const Wrapper = styled.View`
  flex-direction: column;
  margin: 50px;
`

const req = require.context('../src', true, /\.story\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Wrapper>{story()}</Wrapper>
  </ThemeProvider>
))

configure(loadStories, module)
