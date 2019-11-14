import { styled } from 'ui/theme'

type Props = {
  color?: string
}

export const Body1 = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fontFamily.primaryRegular};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme, color }) => color || theme.pallete.nero.nero};
`
