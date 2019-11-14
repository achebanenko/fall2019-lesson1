import React from 'react'
import { styled } from 'ui/theme'
import { Caption1 } from 'ui/typography'

const Text = styled(Caption1)`
  color: ${({ theme }) => theme.pallete.main.error};
`

type Props = {
  children: string
}

export const FieldError: React.FC<Props> = ({ children }) => (
  <Text>{children}</Text>
)
