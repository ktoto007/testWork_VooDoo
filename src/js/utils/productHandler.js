import { service } from "./fetchProducts.js";
import { refs } from "./refs.js";
import { renderProductsCard } from "./renderProductsCard.js";
import { pagBuild } from "./pagRender.js";
import { renderShopCartEl } from "./renderShopCartEl.js";

async function productHandler() {
  const products = await service.fetchProducts();

  refs.productList.innerHTML = renderProductsCard(products);
  service.productList = products;
  pagBuild(service.newPage);
  renderShopCartEl();
}

export { productHandler };
