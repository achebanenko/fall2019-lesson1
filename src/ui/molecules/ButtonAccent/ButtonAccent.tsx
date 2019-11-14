import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { styled, withTheme, ThemeProps, Theme } from 'ui/theme'
import { ButtonText } from 'ui/typography'
import { Loader } from 'ui/atoms'

type StyledProps = {
  pressed: boolean
  disabled?: boolean
  loading?: boolean
}

const Container = styled.View<StyledProps>`
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.paddings.threeQuarters}px ${theme.paddings.main}px`};
  text-align: center;
  background-color: ${({ theme, pressed, loading }) =>
    pressed || loading ? theme.pallete.nero.nero : 'transparent'};
  border: 2px solid
    ${({ theme, pressed, disabled, loading }) =>
      disabled
        ? theme.pallete.nero.silver
        : pressed || loading
        ? 'transparent'
        : theme.pallete.main.radicalRed};
  border-radius: 4px;
`

type Props = {
  children: string
  disabled?: boolean
  loading?: boolean
  onPress: () => void
} & ThemeProps<Theme>

export const ButtonAccent = withTheme(
  ({ children, disabled, loading, onPress, theme }: Props) => {
    const [pressed, setPressed] = useState(false)
    return (
      <TouchableHighlight
        onPress={disabled ? () => undefined : onPress}
        activeOpacity={1}
        underlayColor="transparent"
        onShowUnderlay={() => setPressed(true)}
        onHideUnderlay={() => setPressed(false)}
      >
        <Container pressed={pressed} disabled={disabled} loading={loading}>
          {loading ? (
            <Loader color={theme.pallete.main.white} />
          ) : (
            <ButtonText
              color={
                disabled || pressed ? theme.pallete.nero.silver : undefined
              }
            >
              {children}
            </ButtonText>
          )}
        </Container>
      </TouchableHighlight>
    )
  }
)
