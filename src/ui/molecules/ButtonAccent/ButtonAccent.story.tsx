import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ButtonAccent } from './ButtonAccent'

storiesOf('ui/molecules', module).add('ButtonAccent', () => (
  <ButtonAccent
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    onPress={action('press')}
  >
    {text('children', 'Button')}
  </ButtonAccent>
))
