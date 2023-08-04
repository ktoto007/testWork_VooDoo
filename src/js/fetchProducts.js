class ApiServise {
    constructor() {
      this.page = 8 ;
    }
    async fetchProducts() {
      const limit = 24
      const url = `https://voodoo-sandbox.myshopify.com/products.json?page=${this.page}&limit=${limit}`;
      const resolve = await fetch(url);
      const products = await resolve.json();
      return products.products;
    }
  
   
  
    get newPage() {
      return this.page;
    }
  
    set newPage(page) {
      this.page = page;
    }
  
  }

export const  service = new ApiServise