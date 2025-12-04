<script setup>
import { itemsStore } from "@/stores/items";
import ItemCart from "./ItemCart.vue";

// const items = [];
// const products = JSON.parse(localStorage.getItem("items")) || [];
</script>

<template>
  <ul class="divide-y divide-gray-200 space-y-4 p-6">
    <item-cart
      v-for="item in itemsStore.itemsList"
      :key="item.id"
      :item="item"
    ></item-cart>
    <!-- Repeat for other cart items -->
  </ul>
</template>

<style scoped></style>
