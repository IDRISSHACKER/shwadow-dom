class Ih extends HTMLElement{

    constructor(){
        super()
        this.innerHTML = "Hello World";
    }

}

customElements.define('idriss-element', Ih);