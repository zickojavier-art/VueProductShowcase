<template>
  <main class="product-list">
    <h2 class="product-list__title">Productos</h2>
    <div class="product-list__filter">
      <v-select
        v-model="filtersStore.selectedCategory"
        :items="productsStore.categories"
        label="Filtrar por categoría"
        clearable
        variant="outlined"
        density="comfortable"
        data-cy="category-filter"
      />
    </div>

    <p v-if="productsStore.loading" class="product-list__message">Cargando productos...</p>

    <p v-if="productsStore.error" class="product-list__message product-list__message--error">
      {{ productsStore.error }}
    </p>

    <p
      v-if="!productsStore.loading && !productsStore.error && filteredProducts.length === 0"
      class="product-list__message"
    >
      No hay productos disponibles.
    </p>

    <div class="product-list__grid">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '../stores/products.js'
import { useFiltersStore } from '../stores/filters.js'

const productsStore = useProductsStore()
const filtersStore = useFiltersStore()

const filteredProducts = computed(() => {
  if (!filtersStore.selectedCategory) {
    return productsStore.products
  }

  return productsStore.products.filter(
    (product) => product.category === filtersStore.selectedCategory,
  )
})

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.product-list__title {
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.product-list__filter {
  max-width: 400px;
  min-height: 56px;
  margin-bottom: 1.5rem;
}

.product-list__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.product-list__message {
  margin-bottom: 1.5rem;
  color: #64748b;
}

.product-list__message--error {
  color: #dc2626;
}

/* Tablet */
@media (max-width: 1000px) {
  .product-list__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablet pequeña */
@media (max-width: 750px) {
  .product-list__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Celular */
@media (max-width: 500px) {
  .product-list {
    padding: 1.5rem 1rem;
  }

  .product-list__grid {
    grid-template-columns: 1fr;
  }

  .product-list__filter {
    max-width: none;
  }
}
</style>
