import { styled } from 'ui/theme'

type Props = {
  color?: string
}

export const Caption1 = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fontFamily.primaryRegular};
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme, color }) => color || theme.pallete.nero.nero};
`
