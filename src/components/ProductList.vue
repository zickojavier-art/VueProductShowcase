<template>
  <main class="product-list">
    <h2 class="product-list__title">Productos</h2>

    <div class="product-list__grid">
      <ProductCard />
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import ProductCard from './ProductCard.vue'

onMounted(() => {
  console.log('ProductList se ha montado correctamente')
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
</style>
