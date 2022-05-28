import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'
import * as Strings from './strings';

interface StatisticProps {
  navigation: StackNavigationProp<AppStackParamList, 'Statistic'>
}

const Statistic = ({ navigation }: StatisticProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{Strings.STATISTICS}</Header>
    <ContentView />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)
export default Statistic
