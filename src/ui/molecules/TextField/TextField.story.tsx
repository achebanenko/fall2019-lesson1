import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { TextField } from './TextField'

storiesOf('ui/molecules', module).add('TextField', () => {
  const [value, setValue] = useState('')
  return (
    <TextField
      value={value}
      label={text('label', 'Номер телефона')}
      valid={boolean('valid', false)}
      placeholder={text('placeholder', 'XXXXXXXXXX')}
      errorMessage={text('errorMessage', '')}
      hint={text('hint', 'Подсказка')}
      before={text('before', '+7')}
      after={text('after', '₽')}
      status={select(
        'status',
        { loading: 'loading', success: 'success', undefined: undefined },
        undefined
      )}
      disabled={boolean('disabled', false)}
      onChange={text => setValue(text)}
    />
  )
})
