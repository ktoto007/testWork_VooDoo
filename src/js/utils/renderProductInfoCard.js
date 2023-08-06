function renderProductInfoCard(product) {
  return `
    <product-info class="block py-[40px] px-[24px] bg-modalBG big:w-[400px] big:relative big:left-[37%] big:top-[7%]">
      <div slot="head-cont" class="flex justify-between">
      <h2 slot="title" class="mb-[20px]" >${product.title}</h2>
        <button slot="close-btn" id="productInfoClose" type="button" class="">
          <svg class=" w-[24px] h-[24px]">
            <use href="./images/symbol-defs.svg#close-line">
          </use></svg>
        </button>
      </div>
      
      <img
        class="w-[390px] h-[350px] mb-[20px]"
        slot="img"
        src="${product.images[0] != undefined ? product.images[0].src : ""}"
        alt="${product.title}"
      />

      <ul slot="information" class="flex flex-col gap-[7px] items-center mb-[20px]">
        <li>Count options: ${product.options.length}</li>
        <li>Count variants: ${product.variants.length}</li>
        <li>Type: ${product.product_type}</li>
        <li>Price: ${product.variants[0].price}</li>
      </ul>
      <button
        slot="add-btn"
        id="productInfoAdd"
        type="button"
        class="py-[16px] bg-lightSand text-black rounded w-full"
      >
        Add to cart
      </button>
    </product-info>`;
}

export { renderProductInfoCard };
