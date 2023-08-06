const template = document.createElement("template");
template.innerHTML = `
    <div >
      <slot name="head-cont">
        <slot name="title"></slot>
        <slot name="close-btn"></slot>
      </slot>
      <slot name="img"></slot>     
         
      <slot name="information"></slot>  
      <slot name="add-btn"></slot>
    </div>
`;

class ProductInfo extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("product-info", ProductInfo);
