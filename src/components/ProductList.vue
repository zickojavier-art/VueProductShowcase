<template>
  <main class="product-list">
    <h2 class="product-list__title">Productos</h2>

    <div class="product-list__filter">
      <label for="category">Filtrar por categoría:</label>

      <select id="category" v-model="filtersStore.selectedCategory">
        <option value="">Todas las categorías</option>

        <option v-for="category in productsStore.categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
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
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.product-list__filter label {
  font-weight: 600;
  color: #1e293b;
}

.product-list__filter select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background-color: white;
}

.product-list__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.product-list__message {
  margin-bottom: 1.5rem;
  color: #64748b;
}

.product-list__message--error {
  color: #dc2626;
}
</style>
