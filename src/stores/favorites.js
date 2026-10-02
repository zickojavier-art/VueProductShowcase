import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteIds: [],
  }),

  getters: {
    isFavorite: (state) => {
      return (productId) => state.favoriteIds.includes(productId)
    },
  },

  actions: {
    toggleFavorite(productId) {
      if (this.favoriteIds.includes(productId)) {
        this.favoriteIds = this.favoriteIds.filter((id) => id !== productId)
      } else {
        this.favoriteIds.push(productId)
      }
    },
  },
})
