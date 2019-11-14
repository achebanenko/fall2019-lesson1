import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { styled, withTheme, ThemeProps, Theme } from 'ui/theme'
import {
  VBox,
  HBox,
  Loader,
  FieldAdornment,
  FieldLabel,
  FieldHint,
  FieldError
} from 'ui/atoms'
import { Correct } from 'ui/icons'

const Container = styled.View<{ focused: boolean; isError: boolean }>`
  flex-direction: row;
  padding: ${({ theme }) => theme.paddings.half}px 0;
  background-color: ${({ theme }) => theme.pallete.nero.darkWhite};
  border-width: 1px;
  border-color: ${({ theme, focused, isError }) =>
    isError
      ? theme.pallete.main.error
      : focused
      ? theme.pallete.nero.lightGray
      : 'transparent'};
  border-radius: 4px;
`

const Input = styled(TextInput)<{ isloading: number; disabled?: boolean }>`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.primaryRegular};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme, isloading, disabled }) =>
    isloading || disabled ? theme.pallete.nero.gray : theme.pallete.nero.nero};
  outline-style: none;
`

type Props = {
  value: string
  label?: string
  valid?: boolean
  placeholder?: string
  hint?: string
  errorMessage?: string
  after?: string
  before?: string
  status?: 'loading' | 'success'
  disabled?: boolean
  onChange: (value: string) => void
} & ThemeProps<Theme>

export const TextField = withTheme(
  ({
    value,
    label,
    valid,
    placeholder,
    hint,
    errorMessage,
    before,
    after,
    status,
    disabled,
    onChange,
    theme
  }: Props) => {
    const [focused, setFocused] = useState(false)
    return (
      <>
        {label ? (
          <>
            <FieldLabel valid={valid}>{label}</FieldLabel>
            <HBox />
          </>
        ) : null}

        <Container focused={focused} isError={Boolean(errorMessage)}>
          {before ? (
            <FieldAdornment>{before}</FieldAdornment>
          ) : (
            <VBox width={theme.paddings.main} />
          )}
          <Input
            value={value}
            isloading={status === 'loading' ? 1 : 0}
            disabled={disabled}
            editable={!disabled}
            placeholder={placeholder}
            placeholderTextColor={theme.pallete.nero.lightGray}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={onChange}
          />
          {after || status ? (
            <FieldAdornment>
              {status === 'loading' ? (
                <Loader />
              ) : status === 'success' ? (
                <Correct />
              ) : (
                after
              )}
            </FieldAdornment>
          ) : (
            <VBox width={theme.paddings.main} />
          )}
        </Container>

        <HBox height={theme.paddings.half} />
        {errorMessage ? (
          <FieldError>{errorMessage}</FieldError>
        ) : (
          <FieldHint>{hint}</FieldHint>
        )}
      </>
    )
  }
)
