<template>
  <article class="product-card">
    <div class="product-card__image">
      <span>Imagen</span>
    </div>

    <div class="product-card__content">
      <h2 class="product-card__title">Producto de ejemplo</h2>

      <p class="product-card__description">Descripción del producto.</p>

      <p class="product-card__price">$29.990</p>

      <button class="product-card__button">Ver producto</button>
    </div>
  </article>
</template>

<script setup></script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.product-card__image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  background-color: #e2e8f0;
  color: #64748b;
}

.product-card__content {
  padding: 1rem;
}

.product-card__title {
  margin: 0;
  color: #1e293b;
}

.product-card__description {
  color: #64748b;
}

.product-card__price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0f172a;
}

.product-card__button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #1e293b;
  color: white;
  cursor: pointer;
}

.product-card__button:hover {
  opacity: 0.9;
}
</style>
