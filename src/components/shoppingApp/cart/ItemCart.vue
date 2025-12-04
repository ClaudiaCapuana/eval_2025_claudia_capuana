<script setup>
const props = defineProps({ item: { type: Object, required: true } });
const srcimg = `https://picsum.photos/300/200/?random=${props.item.id}`;
</script>
<template>
  <li class="flex justify-between items-center py-3">
    <div class="flex items-center">
      <img :src="srcimg" alt="Product" class="h-12 w-12 rounded-full mr-4" />
      <div>
        <span class="font-semibold">{{ props.item.name }}</span>
        <span class="block text-sm text-gray-500">{{ props.item.price }}€</span>
      </div>
    </div>
    <div class="flex items-center">
      <input
        type="number"
        class="form-input mt-1 block w-16 text-center rounded text-gray-700 border-gray-300 border"
        :value="props.item.quantity"
        min="1"
      />
      <button class="ml-2 text-red-500 hover:text-red-700">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </li>
</template>
<style scoped></style>
