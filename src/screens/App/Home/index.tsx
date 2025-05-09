import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {useFavoriteStore} from '../../../store/favoriteStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {List} from '../../../components/List';
import {useExchangeRates} from '../../../hooks/useExchangeRates';
import {goldColor} from '../../../constants/colors';
import {useExchangeRatesStore} from '../../../store/exchangeStore';
import {styles} from './styles';

function Home(): React.JSX.Element {
  const [isOffline, setIsOffline] = useState<boolean | null>(null);
  
  const {data, loading, error} = useExchangeRates();
  const {setData} = useExchangeRatesStore();
    
  const getStoredRates = async () => {
    try {
      const json = await AsyncStorage.getItem('exchangeRates');
      return json != null ? JSON.parse(json) : null;
    } catch (error) {
      console.error('error get data rates', error);
      return null;
    }
  };

  useEffect(() => {
    const checkIsOffline = async () => {
      if (!isOffline) return;
      const rates = await getStoredRates();      
      if (rates) setData(rates);
      else setData([]);
    }
    checkIsOffline()
  },[isOffline])

  //check is offline
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {          
      setIsOffline(!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  //get favorite data
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('favorite');
        if (value !== null) {
          useFavoriteStore.getState().setFavorites(JSON.parse(value))
        }
      } catch (e) {
        console.error('error get data from storage', e)
      }
    };
    getData();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      {isOffline && (
        <View style={styles.offlineContainer}>
          <View style={styles.offlineBadge}>
            <Text style={styles.offlineText}>Offline mode</Text>
          </View>
        </View>
      )}

      {loading && (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={goldColor} />
        </View>
      )}

      {error && !loading && (
        <View style={styles.centered}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      {!data?.length && !loading && (
        <View style={styles.centered}>
          <Text style={styles.noDataText}>No data {error}</Text>
        </View>
      )}

      {!loading && !error && !!data?.length && <List data={data} icon="star" />}
    </SafeAreaView>
  );
}

export default Home;
