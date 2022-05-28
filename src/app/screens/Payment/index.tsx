import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'
import * as Strings from './strings'

interface CountersProps {
  navigation: StackNavigationProp<AppStackParamList, 'Payment'>
}

const Counters = ({ navigation }: CountersProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{Strings.UTILITY_PAYMENT}</Header>
    <ContentView navigation={navigation} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default Counters
