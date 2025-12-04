import { reactive } from "vue";
import DB from "@/services/DB";

const itemsList = reactive([]);
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
    DB.createItemCart(itemsList);
  } else {
    item.quantity = 1;
    itemsList.push(item);
    DB.createItemCart(itemsList);
    console.log(itemsList, "------");
  }
};

export const itemsStore = reactive({
  init,
  itemsList,
  addCartList,
});
