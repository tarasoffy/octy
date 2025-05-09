import { useEffect, useState } from 'react';
import { getExchangeRates } from '../api/exchangeRatesService';
import { useExchangeRatesStore } from '../store/exchangeStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Rate = {
  base_currency: string;
  date: string;
  quote: number;
  quote_currency: string;
};

interface ExchangeRatesStore {
  rate: Rate[] | null;
}

export const useExchangeRates = () => {
  const {data, setData, isLoaded, setIsLoaded} = useExchangeRatesStore();
  const [loading, setLoading] = useState(!isLoaded);
  const [error, setError] = useState<string | null>(null);

  const saveExchangeRates = async (rates: ExchangeRatesStore) => {
    try {
      await AsyncStorage.setItem('exchangeRates', JSON.stringify(rates));
    } catch (error) {
      console.error('error save data', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoaded) {
        try {
          const result = await getExchangeRates();
          setIsLoaded(true);
          setData(result);          
          if(result) await saveExchangeRates(result)
        } catch (err) {
          setError((err as Error).message);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [isLoaded, setData, setIsLoaded]);

  return { data, loading, error };
};
