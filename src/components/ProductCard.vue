<template>
  <v-card class="product-card" elevation="2">
    <img :src="product.image" :alt="product.title" class="product-card__image" />

    <v-card-title class="product-card__title">
      {{ product.title }}
    </v-card-title>

    <v-card-text>
      <p class="product-card__description">
        {{ product.description }}
      </p>

      <p class="product-card__price">${{ product.price }}</p>
    </v-card-text>

    <v-card-actions class="product-card__actions">
      <v-btn variant="outlined" @click="favoritesStore.toggleFavorite(product.id)">
        {{ favoritesStore.isFavorite(product.id) ? '★ Favorito' : '☆ Agregar a favoritos' }}
      </v-btn>

      <v-btn color="primary" variant="flat"> Ver producto </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favorites.js'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const favoritesStore = useFavoritesStore()
</script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 320px;
}

.product-card__image {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: contain;
  background-color: #f8fafc;
}

.product-card__title {
  white-space: normal;
  line-height: 1.4;
}

.product-card__description {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #64748b;
}

.product-card__price {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.product-card__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: stretch;
}
</style>
