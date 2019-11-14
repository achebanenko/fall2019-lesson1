import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading2, Heading3, Body1, Caption1, ButtonText } from 'ui/typography'

storiesOf('ui/typography', module).add('typography', () => (
  <>
    <Heading2>Heading2 32px</Heading2>
    <Heading3>Heading3 24px</Heading3>
    <Body1>Body1 16px</Body1>
    <Caption1>Caption1 12px</Caption1>
    <ButtonText>ButtonText 14px</ButtonText>
  </>
))
