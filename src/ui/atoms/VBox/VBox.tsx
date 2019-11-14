import { styled } from 'ui/theme'

type Props = {
  width?: number
}

export const VBox = styled.View<Props>`
  width: ${({ theme, width }) => (width ? width : theme.paddings.main)}px;
`
