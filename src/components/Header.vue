<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">Vue Product Showcase</h1>
      <p class="header__subtitle">Catálogo de productos</p>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  padding: 1.5rem;
  background-color: #1e293b;
  color: white;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
}

.header__title {
  margin: 0;
  font-size: 1.8rem;
}

.header__subtitle {
  margin: 0.5rem 0 0;
  opacity: 0.8;
}
</style>
