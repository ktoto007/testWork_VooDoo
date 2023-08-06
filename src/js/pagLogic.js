import { refs } from "./utils/refs.js";
import { service } from "./utils/fetchProducts.js";
import { productHandler } from "./utils/productHandler.js";

async function pagHendler(event) {
  if (event.target.type !== "button") {
    return;
  }
  service.newPage = Number(event.target.textContent);
  productHandler();
}

refs.buttonsPages.addEventListener("click", pagHendler);
