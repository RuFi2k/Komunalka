import payed from 'assets/payed.png'
import warningSign from 'assets/warningSign.png'
import PaymentSection from 'common/PaymentSection'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'
import * as Strings from './strings'

interface ContentViewProps {
  isSuccessful?: boolean
}

const ContentView = ({ isSuccessful }: ContentViewProps) => (
  <View style={styles.screenContainer}>
    <PaymentSection />
    <View style={styles.screen}>
      {isSuccessful ? (
        <View style={styles.content}>
          <View style={styles.payedTitleWrapper}>
            <Text style={styles.title}>
              {Strings.PAID_SUCCESSFULLY}
            </Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={payed} style={styles.payed} />
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.contentInner}>
            <Image source={warningSign} style={styles.warningSignIcon} />
            <Text style={[styles.title, styles.unsuccessfulTitle]}>
              {Strings.CHECK_CONNECTION}
              {Strings.WITH_INTERNET}
            </Text>
          </View>
        </View>
      )}
    </View>
  </View>
)

export default ContentView
