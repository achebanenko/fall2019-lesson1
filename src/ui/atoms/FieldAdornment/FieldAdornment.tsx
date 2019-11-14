import React from 'react'
import { styled } from 'ui/theme'
import { Body1 } from 'ui/typography'

const Container = styled.View`
  width: 40px;
  align-items: center;
`

const Text = styled(Body1)`
  color: ${({ theme }) => theme.pallete.nero.gray};
`

type Props = {
  children: string | React.ReactNode
}

export const FieldAdornment: React.FC<Props> = ({ children }) => (
  <Container>
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </Container>
)
