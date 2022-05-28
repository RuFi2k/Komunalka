import Button from 'components/Button'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface EmptyStateViewProps {
  onButtonPress: () => void
  label: string
  buttonLabel: string
  image?: {
      location: string
  }
}

const EmptyStateView = ({ onButtonPress, label, buttonLabel, image }: EmptyStateViewProps) => (
  <View style={styles.content}>
    <Text style={styles.text}>{label}</Text>
    {image && <Image source={image.location} style={styles.icon} />}
    <View style={styles.buttonWrapper}>
      <Button onPress={onButtonPress}>{buttonLabel}</Button>
    </View>
  </View>
)

export default EmptyStateView
