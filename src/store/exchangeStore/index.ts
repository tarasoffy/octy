import { create } from 'zustand';

type Rate = {
  base_currency: string;
  date: string;
  quote: number;
  quote_currency: string;
};

interface ExchangeRatesStore {
  data: Rate[] | null;
  setData: (data: Rate[]) => void;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

export const useExchangeRatesStore = create<ExchangeRatesStore>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
}));
