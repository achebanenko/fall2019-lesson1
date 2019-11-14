import React from 'react'
import { styled, withTheme, ThemeProps, Theme } from 'ui/theme'
import { Heading2, Heading3 } from 'ui/typography'
import { HBox } from 'ui/atoms'

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 100vh;
`

type Props = {} & ThemeProps<Theme>

export const Intro: React.FC = withTheme(({ theme }: Props) => (
  <Wrapper>
    <Heading2 color={theme.pallete.main.turquoise}>Lesson 1</Heading2>
    <HBox height={theme.paddings.double} />
    <Heading3>Atomic design</Heading3>
    <HBox />
    <Heading3>Styled components</Heading3>
    <HBox />
    <Heading3>Storybook</Heading3>
  </Wrapper>
))
