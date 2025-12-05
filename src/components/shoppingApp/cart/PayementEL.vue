<script setup>
import { itemsStore } from "@/stores/items";
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between mb-1">
      <span> <strong>Total HTVA:</strong></span>
      <span>{{ itemsStore.subTotal }}€</span>
    </div>
    <div class="flex justify-between mb-1">
      <span><strong>Taxe (20%):</strong></span>
      <span>{{ itemsStore.taxeTva }}€</span>
    </div>
    <div class="flex justify-between items-center my-8">
      <span><strong>Livraison:</strong></span>
      <select
        class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2"
        v-model="itemsStore.deliveryCost"
      >
        <option value="5">Standard - €5</option>
        <option value="15">Express - €15</option>
      </select>
    </div>
    <div class="flex justify-between font-bold mb-1 text-xl">
      <span><strong>Total Général:</strong></span>
      <span>{{ itemsStore.total }}€</span>
    </div>
    <button
      class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cart-btn"
      @click="itemsStore.resetCart"
    >
      Procéder au paiement
    </button>
  </div>
</template>

<style scoped></style>
