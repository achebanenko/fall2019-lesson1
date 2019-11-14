import React from 'react'
import { styled } from 'ui/theme'
import { Caption1 } from 'ui/typography'

const Container = styled.View`
  height: 16px;
`
const Text = styled(Caption1)`
  color: ${({ theme }) => theme.pallete.nero.lightGray};
`

type Props = {
  children?: string
}

export const FieldHint: React.FC<Props> = ({ children }) => (
  <Container>{children ? <Text>{children}</Text> : null}</Container>
)
