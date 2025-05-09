import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useFavoriteStore} from '../../../store/favoriteStore';
import {List} from '../../../components/List';
import { useExchangeRates } from '../../../hooks/useExchangeRates';
import { styles } from './styles';

export default function Favorite(): React.JSX.Element {
  const {data} = useExchangeRates();
  const {favorite} = useFavoriteStore();

  const favoriteRates = data?.filter(
    (currency) => favorite.includes(currency.quote_currency)
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {favoriteRates && favoriteRates.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite targets</Text>
        </View>
      ) : (
        <List data={favoriteRates} icon='delete'/>
      )}
    </SafeAreaView>
  );
}