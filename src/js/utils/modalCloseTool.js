import { refs } from "./refs.js";

function shopCartToggle(evt) {
  refs.shopCartBackdrop.classList.toggle("opacity-0");
  refs.shopCartBackdrop.classList.toggle("opacity-100");
  refs.shopCartBackdrop.classList.toggle("pointer-events-none");
  document.body.classList.toggle("overflow-hidden");
}

function productInfoToggle() {
  refs.productInfoBackdrop.classList.toggle("opacity-0");
  refs.productInfoBackdrop.classList.toggle("opacity-100");
  refs.productInfoBackdrop.classList.toggle("pointer-events-none");
  document.body.classList.toggle("overflow-hidden");
}

function closeInfoProducts() {
  refs.productInfoBackdrop.innerHTML = "";
  productInfoToggle();
}

function closeModalOnBackdrop(evt) {
  if (evt.target.id === "shopCartBackdrop") {
    shopCartToggle();
  }
  if (evt.target.id === "productInfoBackdrop") {
    closeInfoProducts();
  }
}

function closeModalOnESC(evt) {
  if (
    evt.code === "Escape" &&
    !refs.shopCartBackdrop.classList.contains("pointer-events-none")
  ) {
    shopCartToggle();
  }
  if (
    evt.code === "Escape" &&
    !refs.productInfoBackdrop.classList.contains("pointer-events-none")
  ) {
    closeInfoProducts();
  }
}

export {
  shopCartToggle,
  productInfoToggle,
  closeInfoProducts,
  closeModalOnBackdrop,
  closeModalOnESC,
};
