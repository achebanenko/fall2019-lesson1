import React from 'react'
import { styled } from 'ui/theme'
import { Accept } from 'ui/icons'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`
const Icon = styled.View`
  margin-left: ${({ theme }) => theme.paddings.half}px;
`

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primaryMedium};
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.pallete.nero.nero};
`

type Props = {
  children: string
  valid?: boolean
}

export const FieldLabel: React.FC<Props> = ({ children, valid }) => (
  <Container>
    <Text>{children}</Text>
    {valid ? (
      <Icon>
        <Accept />
      </Icon>
    ) : null}
  </Container>
)
