import { reactive } from "vue";
import DB from "@/services/DB";

const products = reactive([]);

async function init(apiURL) {
  DB.setApiUrl(apiURL);
  const data = await DB.findAll();
  products.splice(0, products.length, ...data); // remplace proprement
}

export const productsStore = reactive({
  init,
  products,
});
