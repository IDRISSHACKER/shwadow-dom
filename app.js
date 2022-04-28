class Ih extends HTMLElement{

    constructor(){
        super()
        this.INTERVAL_TO_UPDATE_USERS = 5000;
        this.users = ["Idriss", "Bill Gates", "Steve Jobs", "Tim Cook", "Elon Musk", "Jeft Bezoss", "Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Tim Cook"]
        this.currentUserPosition = 1;
        this.innerHTML = `Hello World ${this.getUser(this.currentUserPosition)}`;
        this.classList.add("ih");
        this.userCont = document.createElement("div");
      
        if(this.getAttribute("start")){
            this.currentUserPosition = parseInt(this.getAttribute("start"))
        }
       
        if (this.getAttribute("refresh-rate")) {
            this.INTERVAL_TO_UPDATE_USERS = parseInt(this.getAttribute("refresh-rate"))
        }
    }

    getUser(position){
        return this.users[position];
    }

    refreshElement(){
        this.innerHTML = `HELLO WORD ${this.userCont.innerHTML}`;
    }


    connectedCallback(){
        this.timer = window.setInterval(()=>{
            const user = this.getUser(this.currentUserPosition);
            this.userCont.innerHTML = user;
            this.currentUserPosition = this.getUser(this.currentUserPosition+1) == undefined ? 0 : this.currentUserPosition + 1;
            this.refreshElement();
        }, this.INTERVAL_TO_UPDATE_USERS)
    }

    disconnectedCallback(){
        clearInterval(this.timer);
    }

    attributeChangedCallback(name, oldValue, newValue){
        console.log(name)
    }

}

customElements.define('idriss-element', Ih);