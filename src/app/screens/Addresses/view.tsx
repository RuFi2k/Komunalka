import { StackNavigationProp } from '@react-navigation/stack'
import add from 'assets/icons/add.png'
import mapBg from 'assets/mapBg.png'
import EmptyStateView from 'common/EmptyStateView'
import SwipableList from 'common/SwipableList'
import AddressItem from 'components/AddressItem'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, View } from 'react-native'
import { AppStackParamList, IAddressItem } from 'types'
import location from 'assets/location.png'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Addresses'>
  addresses: IAddressItem[]
  onDelete: (newAddresses: IAddressItem[]) => void
}

const ContentView = ({
  navigation: { navigate },
  addresses,
  onDelete,
}: ContentViewProps) => (
  <View style={styles.page}>
    <Image source={mapBg} style={styles.map} />
    <View style={styles.iconsRow}>
      <Touchable onPress={() => navigate('AddAddress')}>
        <Image source={add} style={styles.addIcon} />
      </Touchable>
    </View>
    {addresses.length ? (
      <SwipableList
        data={addresses.map((address) => ({
          ...address,
          key: `${address.street},${address.homeNumber}`,
        }))}
        renderItem={(item) => (
          <AddressItem item={item.item as unknown as IAddressItem} />
        )}
        onDelete={(item) => onDelete(item as unknown as IAddressItem[])}
      />
    ) : (
      <EmptyStateView
        label='Ще немає жодної адреси'
        buttonLabel='Додати адресу'
        onButtonPress={() => navigate('AddAddress')}
        image={{ location }}
      />
    )}
  </View>
)

export default ContentView
