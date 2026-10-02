<template>
  <main class="product-list">
    <h2 class="product-list__title">Productos</h2>
    <div class="product-list__filter">
      <label for="category">Filtrar por categoría:</label>

      <select id="category" v-model="selectedCategory">
        <option value="">Todas las categorías</option>

        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <p v-if="loading" class="product-list__message">Cargando productos...</p>

    <p v-if="error" class="product-list__message product-list__message--error">
      {{ error }}
    </p>

    <p v-if="!loading && !error && products.length === 0" class="product-list__message">
      No hay productos disponibles.
    </p>

    <div class="product-list__grid">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import api from '../services/api.js'

const products = ref([])
const loading = ref(true)
const error = ref(null)
const categories = ref([])
const selectedCategory = ref('')
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value
  }

  return products.value.filter((product) => product.category === selectedCategory.value)
})
onMounted(async () => {
  try {
    const response = await api.get('/products')

    const categoriesResponse = await api.get('/products/categories')
    categories.value = categoriesResponse.data
    products.value = response.data
  } catch (err) {
    error.value = 'No fue posible cargar los productos.'
    console.error(err)
  } finally {
    loading.value = false
  }
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
