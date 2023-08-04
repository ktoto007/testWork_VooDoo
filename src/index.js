import {service} from './js/fetchProducts.js'
import { pagBuild , openNewPage} from './js/pag.js';
import { refs } from './js/refs.js';

    
    const a = async () => {
    const products = await service.fetchProducts(); 
    
    refs.productList.innerHTML +=renderProductsCard(products)
    return(products);
}

function renderProductsCard(products) {
    const productCards = products.map(product => {
        // console.log(product)
        return`
        <li> 
            <img class="w-[340px] h-[300px] mb-[16px] border border-black rounded" src="${product.images[0] != undefined ? product.images[0].src : ''}" alt="${product.title}">
            <div class="flex justify-between text-sm mb-[13px] ">
                <div class="font-bold">
                    <p>${product.title}</p>
                    <p>${product.variants[0].price}</p>
                </div>    
                <div>
                    <p>Condition</p>
                    <p>Slightly used</p>
                </div>
            </div>    
            <button type="button" class="py-[16px] bg-black text-white rounded w-full">Add to cart</button>
        </li>
        `
    }).join("");

    return productCards
} 

// console.log(service.newPage)
pagBuild(service.newPage)


a()
