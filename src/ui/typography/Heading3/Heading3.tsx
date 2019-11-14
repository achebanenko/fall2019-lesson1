import { styled } from 'ui/theme'

type Props = {
  color?: string
}

export const Heading3 = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fontFamily.primarySemibold};
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme, color }) => color || theme.pallete.nero.nero};
`
