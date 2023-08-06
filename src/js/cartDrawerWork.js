import { refs } from "./utils/refs.js";
import { service } from "./utils/fetchProducts.js";
import { save } from "./utils/storage.js";
import { renderShopCartEl } from "./utils/renderShopCartEl.js";
import { renderProductInfoCard } from "./utils/renderProductInfoCard.js";
import {
  productInfoToggle,
  closeInfoProducts,
  closeModalOnBackdrop,
} from "./utils/modalCloseTool.js";

function a(evt) {
  if (evt.target.type !== "button" && evt.target.dataset.name !== "img") {
    return;
  }

  if (evt.target.dataset.name === "img") {
    const product = service.productList.find(
      (el) => el.id === Number(evt.target.dataset.id)
    );

    refs.productInfoBackdrop.innerHTML = renderProductInfoCard(product);
    productInfoToggle();

    const productInfoClose = document.getElementById("productInfoClose");
    productInfoClose.addEventListener("click", closeInfoProducts);
    const productInfoAdd = document.getElementById("productInfoAdd");
    productInfoAdd.addEventListener("click", () => {
      save("saleCart", [1, product]);
      renderShopCartEl();
    });
    return;
  }

  save("saleCart", [
    1,
    service.productList.find((el) => el.id === Number(evt.target.id)),
  ]);
  renderShopCartEl();
}

refs.productList.addEventListener("click", a);
refs.productInfoBackdrop.addEventListener("click", closeModalOnBackdrop);
