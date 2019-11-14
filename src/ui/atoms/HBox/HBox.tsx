import { styled } from 'ui/theme'

type Props = {
  height?: number
}

export const HBox = styled.View<Props>`
  height: ${({ theme, height }) => (height ? height : theme.paddings.main)}px;
`
