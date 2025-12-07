<script setup>
import { onMounted } from "vue";
import { itemsStore } from "@/stores/items";
import CartList from "./CartList.vue";
import PayementEL from "./PayementEl.vue";
onMounted(() => {
  itemsStore.init();
  console.table(itemsStore.itemsList);
});
</script>

<template>
  <aside class="w-full md:w-1/3 px-4">
    <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
    <div class="cart bg-white rounded-lg shadow animate__animated">
      <cart-list></cart-list>
      <div class="bg-gray-50">
        <payement-e-l></payement-e-l>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
