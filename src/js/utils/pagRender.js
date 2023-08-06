import { refs } from "./refs.js";
let lastPage = Math.ceil(461 / 24);

function pagBuild(page) {
  if (page == 1) {
    refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 1
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 2
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 3
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 4
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `;
    return;
  }
  if (page == lastPage) {
    refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 4
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 3
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 2
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 1
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        `;
    return;
  }
  if (page - 1 == 1) {
    refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] ">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 1
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 2
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 3
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `;
    return;
  }
  if (page + 1 == lastPage) {
    refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 3
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 2
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 1
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] ">${lastPage}</button></li>
        `;
    return;
  }
  refs.buttonsPages.innerHTML = `
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] ">${1}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page - 1
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px] bg-black text-white">${page}</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${
          page + 1
        }</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]" disabled>...</button></li>
        <li><button type="button" class="border border-black rounded-full px-[12px] py-[8px]">${lastPage}</button></li>
        `;
}

export { pagBuild };
