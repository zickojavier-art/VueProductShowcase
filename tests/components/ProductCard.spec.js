import { mount } from '@vue/test-utils'

jest.mock('../../src/stores/favorites.js', () => ({
  useFavoritesStore: () => ({
    isFavorite: () => false,
    toggleFavorite: jest.fn(),
  }),
}))

import ProductCard from '../../src/components/ProductCard.vue'

describe('ProductCard', () => {
  it('renderiza correctamente el nombre del producto', () => {
    const product = {
      id: 1,
      title: 'Producto de prueba',
      price: 99.99,
      description: 'Descripción del producto',
      category: 'electronics',
      image: 'https://example.com/product.jpg',
    }

    const wrapper = mount(ProductCard, {
      props: {
        product,
      },

      global: {
        stubs: {
          'v-card': {
            template: '<div><slot /></div>',
          },

          'v-card-title': {
            template: '<div><slot /></div>',
          },

          'v-card-text': {
            template: '<div><slot /></div>',
          },

          'v-card-actions': {
            template: '<div><slot /></div>',
          },

          'v-btn': {
            template: '<button><slot /></button>',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('Producto de prueba')
  })
})
