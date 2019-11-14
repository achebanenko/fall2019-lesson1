import React, { useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import { styled } from 'ui/theme'
import { Load } from 'ui/icons'

const Container = styled(Animated.View)`
  width: 24px;
  height: 24px;
`

type Props = {
  color?: string
}

export const Loader: React.FC<Props> = ({ color }) => {
  const [rotateAnim] = useState(new Animated.Value(0))
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg']
  })
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear
      })
    ).start()
  }, [rotateAnim])
  return (
    <Container style={{ transform: [{ rotate }, { perspective: 1000 }] }}>
      <Load color={color} />
    </Container>
  )
}
