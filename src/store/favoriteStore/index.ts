import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

type FavoriteStore = {
  favorite: string[]
  toggleFavorite: (currency: string) => void
  setFavorites: (items: string[]) => void
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorite: [],
  toggleFavorite: (currency) => {
    const { favorite } = get()
    const isAlreadyFavorite = favorite.includes(currency)
    const updatedFavorites = isAlreadyFavorite
      ? favorite.filter((item) => item !== currency)
      : [...favorite, currency]
    
    set({ favorite: updatedFavorites })

    AsyncStorage.setItem('favorite', JSON.stringify(updatedFavorites))
  },
  setFavorites: (items) => set({ favorite: items }),
}))
