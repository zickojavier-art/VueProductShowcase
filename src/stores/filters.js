import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    selectedCategory: '',
  }),

  getters: {
    hasCategoryFilter: (state) => {
      return state.selectedCategory !== ''
    },
  },

  actions: {
    setCategory(category) {
      this.selectedCategory = category
    },
  },
})
