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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="System-Line/delete-bin-6-line" clip-path="url(#clip0_2720_971)">
    <g id="Group">
    <path id="Vector" d="M7 4V2H17V4H22V6H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z" fill="#FCF7E6"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2720_971">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
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
