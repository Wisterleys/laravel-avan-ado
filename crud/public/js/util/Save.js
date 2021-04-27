class Save{
    constructor(el){
        this._el=el;
        this.move();
    }
    move(){
        this.el.style.position="absolute";
        this.el.style.top="0px";
        this.el.style.color='green';
        this.el.innerText="Salvo!";
        let counter=0;
        let loop = setInterval(() => {
            this.el.style.top=this.el.offsetTop-counter+"px";
            counter+=10;
            if(counter>500){
                this.el.remove();
                clearInterval(loop);
            }
        }, 100);
    }
    get el(){return this._el;}
}