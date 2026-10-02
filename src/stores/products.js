import { defineStore } from 'pinia'
import api from '../services/api.js'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  getters: {
    categories: (state) => {
      return [...new Set(state.products.map((product) => product.category))]
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null

      try {
        const response = await api.get('/products')
        this.products = response.data
      } catch (error) {
        this.error = 'No fue posible cargar los productos.'
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})
