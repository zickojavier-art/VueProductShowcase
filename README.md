# Vue Product Showcase

SPA desarrollada con Vue 3 para la visualización y filtrado de productos de un catálogo de comercio electrónico.

El proyecto fue desarrollado como parte del módulo de desarrollo Front End de Talento Digital, aplicando componentes reutilizables, consumo de una API REST, manejo de estado global, diseño responsive y pruebas automatizadas.

## 🚀 Demo

Proyecto disponible en GitHub:

https://github.com/zickojavier-art/VueProductShowcase

## 🛠️ Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- Pinia
- Axios
- Vuetify
- Jest
- Vue Test Utils
- Cypress
- JavaScript
- HTML5
- CSS3

## 📋 Características

- Catálogo dinámico de productos.
- Consumo de productos mediante API REST.
- Indicador de carga mientras se obtiene la información.
- Manejo visual de errores de API.
- Mensaje cuando no existen productos disponibles.
- Filtrado de productos por categoría.
- Sistema de favoritos mediante estado global.
- Componentes reutilizables.
- Diseño responsive para escritorio, tablet y dispositivos móviles.
- Modo claro y modo oscuro.
- Pruebas unitarias con Jest y Vue Test Utils.
- Prueba End-to-End configurada con Cypress.

## 📁 Estructura del proyecto

```text
src/
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   ├── ProductCard.vue
│   └── ProductList.vue
│
├── services/
│   └── api.js
│
├── stores/
│   ├── products.js
│   ├── filters.js
│   └── favorites.js
│
├── views/
│
├── router/
│
├── App.vue
└── main.js

tests/
└── components/
    ├── ProductCard.spec.js
    └── ProductList.spec.js

cypress/
└── e2e/
    └── product-filter.cy.js
```

## 🔌 API utilizada

El catálogo utiliza la API pública Fake Store API:

https://fakestoreapi.com/

La aplicación obtiene los productos mediante Axios.

La petición principal utilizada es:

```text
GET https://fakestoreapi.com/products
```

## 🧠 Manejo del estado

El proyecto utiliza **Pinia** como solución de manejo de estado global compatible con Vue 3.

Se implementaron tres stores principales:

### Products

Gestiona:

- Lista de productos.
- Estado de carga.
- Errores de la API.
- Categorías disponibles.
- Consulta de productos a la API.

### Filters

Gestiona:

- Categoría seleccionada.
- Estado del filtro.

### Favorites

Gestiona:

- Productos marcados como favoritos.
- Agregar y eliminar favoritos.

La separación de responsabilidades permite mantener la lógica de la aplicación organizada y facilita su mantenimiento.

## 🎨 Interfaz

Para la construcción de la interfaz se utilizó **Vuetify**, permitiendo utilizar componentes como:

- Cards.
- Buttons.
- Selects.
- Elementos de formulario.

También se implementaron estilos CSS propios para adaptar el catálogo a diferentes tamaños de pantalla.

### Responsive Design

La interfaz contempla diferentes resoluciones:

- Escritorio.
- Tablet.
- Tablet pequeña.
- Dispositivos móviles.

## 🌙 Modo claro y oscuro

La aplicación incorpora un sistema de cambio entre modo claro y modo oscuro utilizando el sistema de temas de Vuetify.

El usuario puede cambiar el tema desde el botón disponible en el encabezado.

## 🧩 Componentización

La aplicación está dividida en componentes reutilizables.

### Header

Contiene:

- Nombre del proyecto.
- Descripción del catálogo.
- Control de modo claro/oscuro.

### ProductList

Se encarga de:

- Obtener los productos.
- Mostrar estados de carga.
- Mostrar errores.
- Filtrar productos.
- Renderizar las tarjetas.

### ProductCard

Representa individualmente cada producto y muestra:

- Imagen.
- Nombre.
- Descripción.
- Precio.
- Botón de favoritos.
- Botón para visualizar el producto.

### Footer

Contiene la información de cierre del catálogo.

## 🧪 Pruebas

El proyecto utiliza Jest y Vue Test Utils para las pruebas unitarias.

Actualmente se implementaron pruebas para:

### ProductCard

Verifica que el componente pueda renderizar correctamente el nombre de un producto.

### ProductList

Verifica que el componente muestre un mensaje cuando ocurre un error al obtener los productos desde la API.

Para ejecutar las pruebas:

```bash
npx jest --runInBand
```

## 🌐 Prueba End-to-End

El proyecto también cuenta con Cypress para realizar pruebas sobre el funcionamiento completo de la aplicación.

La prueba contempla el flujo de filtrado de productos por categoría.

Para iniciar Cypress:

```bash
npx cypress open
```

La prueba se encuentra en:

```text
cypress/e2e/product-filter.cy.js
```

## 📦 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/zickojavier-art/VueProductShowcase.git
```

Ingresar al proyecto:

```bash
cd VueProductShowcase
```

Instalar dependencias:

```bash
npm install
```

## ▶️ Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir la dirección indicada por Vite, normalmente:

```text
http://localhost:5173/
```

## 🏗️ Compilar para producción

Para generar la versión de producción:

```bash
npm run build
```

## 🔍 Justificación técnica

### Vue 3 + Vite

Se utiliza Vue 3 como framework principal debido a su arquitectura basada en componentes y compatibilidad con las herramientas modernas del ecosistema.

Vite permite disponer de un entorno de desarrollo rápido y una configuración sencilla para el proyecto.

### Pinia

Se utiliza Pinia para centralizar el estado de productos, filtros y favoritos.

Esta separación permite que diferentes componentes puedan acceder y modificar el estado de manera organizada.

### Axios

Axios se utiliza para realizar las solicitudes HTTP hacia la API de productos.

### Vuetify

Vuetify permite implementar una interfaz consistente y responsive mediante componentes reutilizables compatibles con Vue 3.

### Jest y Vue Test Utils

Estas herramientas permiten comprobar el comportamiento individual de los componentes y detectar errores antes de integrar la aplicación completa.

### Cypress

Cypress permite validar flujos completos de usuario dentro de la aplicación mediante pruebas End-to-End.

## 📌 Estado del proyecto

Proyecto académico en desarrollo.

Las funcionalidades principales del catálogo se encuentran implementadas, incluyendo consumo de API, estado global, filtrado, favoritos, diseño responsive, temas claro/oscuro y pruebas automatizadas.

## 👨‍💻 Autor

Desarrollado por **zickojavier-art** como parte del proceso de formación Front End de Talento Digital.
