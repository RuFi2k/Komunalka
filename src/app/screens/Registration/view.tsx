import Touchable from 'components/Touchable'
import React from 'react'
import { Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from './form'
import styles from './styles'
import * as Strings from './strings'

interface ContentViewProps {
  save: () => void
  valid: boolean
}

const ContentView = ({ save, valid }: ContentViewProps) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={styles.screenContainer}
  >
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>{Strings.TITLE}</Text>
        <Text style={styles.description}>
          {Strings.SUBTITLE}
        </Text>
        <Form />
        <Touchable
          onPress={save}
          disabled={!valid}
          style={[styles.submitButton, !valid && styles.disabledButton]}
        >
          <Text style={styles.submitText}>{Strings.REGISTER}</Text>
        </Touchable>
      </View>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
