import { reactive, computed, ref, watch } from "vue";
import DB from "@/services/DB";

const itemsList = reactive([]);
const deliveryCost = ref(5);

const subTotal = computed(() => {
  return itemsList
    .reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    )
    .toFixed(2);
});
const taxeTva = computed(() => {
  return Number(subTotal.value * 0.2).toFixed(2);
});
const total = computed(() => {
  return (
    Number(subTotal.value) +
    Number(deliveryCost.value) +
    Number(taxeTva.value)
  ).toFixed(2);
});

const init = () => {
  itemsList.splice(
    0,
    itemsList.length,
    ...(JSON.parse(localStorage.getItem("items")) || [])
  );
};
const addCartList = (item) => {
  const existingItemIndex = itemsList.findIndex((i) => i.id === item.id);

  if (existingItemIndex !== -1) {
    itemsList[existingItemIndex].quantity += 1;
    // DB.createItemCart(itemsList);
  } else {
    item.quantity = 1;
    itemsList.push(item);
    // DB.createItemCart(itemsList);
    console.log(itemsList, "------");
  }
};
const updateQuantity = (id, quantity) => {
  console.log(id, quantity);
  const index = itemsList.findIndex((item) => item.id === id);
  itemsList[index].quantity = Number(quantity);
  //   DB.UpdateQuantity(itemsList);
};
const deleteItem = (id) => {
  const index = itemsList.findIndex((item) => item.id === id);

  if (id !== -1) {
    itemsList.splice(index, 1);
    // DB.deleteItem(itemsList);
  }
};
const resetCart = () => {
  itemsList.length = 0;
  // DB.resetCart(itemsList);
};

watch(itemsList, () => DB.updateLocalStorage(itemsList), { deep: true });

export const itemsStore = reactive({
  init,
  itemsList,
  addCartList,
  updateQuantity,
  deleteItem,
  subTotal,
  taxeTva,
  deliveryCost,
  total,
  resetCart,
});
