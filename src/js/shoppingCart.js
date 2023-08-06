import { refs } from "./utils/refs.js";
import { save, load, minus, remove } from "./utils/storage.js";
import { renderShopCartEl } from "./utils/renderShopCartEl.js";
import {
  shopCartToggle,
  closeModalOnBackdrop,
  closeModalOnESC,
} from "./utils/modalCloseTool.js";

function a(evt) {
  if (evt.target.type !== "button") {
    return;
  }

  const products = load("saleCart");
  const id = Number(evt.target.dataset.id);
  const ind = products.findIndex((el) => el[1].id === id);
  console.log(evt.target);
  switch (evt.target.dataset.status) {
    case "plus":
      save("saleCart", products[ind]);
      renderShopCartEl();
      break;
    case "minus":
      minus("saleCart", ind);
      renderShopCartEl();
      break;
    case "remove":
      remove("saleCart", ind);

      renderShopCartEl();
      break;
  }
}

refs.shopCartBtnOpen.addEventListener("click", shopCartToggle);
refs.shopCartBtnClose.addEventListener("click", shopCartToggle);
refs.shopCartBackdrop.addEventListener("click", closeModalOnBackdrop);
document.addEventListener("keydown", closeModalOnESC);
refs.shopCartlist.addEventListener("click", a);
