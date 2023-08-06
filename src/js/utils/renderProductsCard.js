function renderProductsCard(products) {
  const productCards = products
    .map((product) => {
      return `
          <li class="w-[280px]"> 
              <img class="w-[340px] h-[300px] mb-[16px] border border-black rounded big:w-[280px]" src="${
                product.images[0] != undefined ? product.images[0].src : ""
              }" alt="${product.title}" data-name="img" data-id="${
        product.id
      }" >
              <div class="flex justify-between text-sm mb-[13px]  text-[14px] ">
                  <div class="font-bold">
                      <p>${product.title}</p>
                      <p>${product.variants[0].price}</p>
                  </div>    
                  <div>
                      <p class="font-medium">Condition</p>
                      <p>Slightly used</p>
                  </div>
              </div>    
              <button type="button" id="${
                product.id
              }" class="py-[16px] bg-black text-white rounded w-full font-bold text-[14px]">Add to cart</button>
          </li>
          `;
    })
    .join("");

  return productCards;
}

export { renderProductsCard };
