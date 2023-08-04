import {refs} from './refs.js'
// import { service } from './fetchProducts';
let lastPage = Math.ceil(250/24);



function pagBuild(page) {
    if(page >= 1 && page+3 <=lastPage){
        refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+2}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+3}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+4}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `
        }
    if(page+4>=lastPage){
        refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+2}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+3}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `
    }
    if(page+3>=lastPage){
        refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+2}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `
    }
    if(page+2>=lastPage){
        refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-2}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page+1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `
    }
    if(page+2>=lastPage){
        refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-3}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-2}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `
    }
    if(page+1>=lastPage){
        refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-4}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-3}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-2}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${page-1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        `
    }
}

function openNewPage(evt) {
    console.log(evt )
}
export {pagBuild, openNewPage}