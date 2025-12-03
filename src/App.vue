<script setup>
import AppHeader from "./components/AppHeader.vue";
import CatalogList from "./components/shoppingApp/catalog/CatalogList.vue";
import Cart from "./components/shoppingApp/cart/Cart.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <app-header></app-header>
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <catalog-list
      apiURL="https://69303bc4778bbf9e00707833.mockapi.io/product/"
    ></catalog-list>

    <cart></cart>

    <!-- Shopping Cart Section -->
  </main>
  <app-footer></app-footer>
</template>

<style scoped></style>
