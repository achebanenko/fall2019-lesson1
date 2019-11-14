import { styled } from 'ui/theme'

type Props = {
  color?: string
}

export const Heading2 = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fontFamily.primaryBold};
  font-size: 32px;
  line-height: 48px;
  color: ${({ theme, color }) => color || theme.pallete.nero.nero};
`
