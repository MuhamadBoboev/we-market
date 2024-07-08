import { create } from 'zustand';
import { IFavorite } from './favorite';

interface FavoriteStore {
  favorites: number[];
  toggleFavorite: (favorite: number) => void;
  isFavorite: (id: number) => boolean;
}

const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],
  toggleFavorite: (favorite) => set((state) => {
    const isFav = state.favorites.some(fav => fav === favorite);
    return {
      favorites: isFav 
        ? state.favorites.filter(fav => fav !== favorite)
        : [...state.favorites, favorite]
    };
  }),
  isFavorite: (id) => {
    const { favorites } = get();
    return favorites.some(fav => fav === id);
  },
}));

export default useFavoriteStore;
