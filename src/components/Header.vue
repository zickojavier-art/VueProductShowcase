<template>
  <header class="header">
    <div class="header__container">
      <div>
        <h1 class="header__title">Vue Product Showcase</h1>
        <p class="header__subtitle">Catálogo de productos</p>
      </div>

      <v-btn
        icon
        variant="outlined"
        @click="toggleTheme"
        :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </v-btn>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<style scoped>
.header {
  padding: 1.5rem;
  background-color: #1e293b;
  color: white;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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
