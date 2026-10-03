import { mount } from '@vue/test-utils'

jest.mock('../../src/stores/products.js', () => ({
  useProductsStore: () => ({
    products: [],
    loading: false,
    error: 'No fue posible cargar los productos.',
    categories: [],
    fetchProducts: jest.fn(),
  }),
}))

jest.mock('../../src/stores/filters.js', () => ({
  useFiltersStore: () => ({
    selectedCategory: '',
  }),
}))

jest.mock('../../src/stores/favorites.js', () => ({
  useFavoritesStore: () => ({
    isFavorite: () => false,
    toggleFavorite: jest.fn(),
  }),
}))

import ProductList from '../../src/components/ProductList.vue'

describe('ProductList', () => {
  it('muestra un mensaje cuando ocurre un error de API', () => {
    const wrapper = mount(ProductList, {
      global: {
        stubs: {
          ProductCard: true,

          'v-select': {
            template: '<div></div>',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('No fue posible cargar los productos.')
  })
})
