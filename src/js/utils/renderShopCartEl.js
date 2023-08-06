import { load } from "./storage.js";
import { refs } from "./refs.js";

function renderShopCartEl() {
  const products = load("saleCart") || [];
  let count = 0;
  const productCards = products
    .map((el) => {
      const product = el[1];
      count += Number(product.variants[0].price) * el[0];
      return `
    <li class="flex justify-between"> 
    <img class="w-[74px] h-[74px]   border border-[rgba(255, 255, 255, 0.50)] rounded" src="${
      product.images[0] != undefined ? product.images[0].src : ""
    }" alt="${product.title}">
    <div class="flex flex-col   text-sm px-[18px] ">
        <p>${product.title}</p>
        <p>${product.variants[0].price}</p>
        <div class="flex gap-[10px]" >
            <button type="button" data-status="minus" data-id="${
              product.id
            }">-</button> 
            <p>${el[0]}</p>
            <button type="button" data-status="plus" data-id="${
              product.id
            }">+</button>
        </div>
    </div>    
    <button type="button" data-status="remove" data-id="${
      product.id
    } class=" p-[4px] p-[4px]"">
      <svg class=" w-[24px] h-[24px]">
        <use href="./src/images/symbol-defs.svg#delete-bin ">
      </use></svg>
    </button>
    </li>`;
    })
    .join("");
  refs.shopCartlist.innerHTML = productCards[0]
    ? productCards
    : "У вас ще нема обраних товарів, оберіть їх і повертайтесь :)";
  refs.productCount.textContent = count.toFixed(2);
}

export { renderShopCartEl };
