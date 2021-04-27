class AjaxController{
    constructor(){
        this._place;
        this._btn=false;
        this._title;
        this._body;
    }
    ajaxPut(value,id){
        let ajax = new XMLHttpRequest();
        ajax.open("POST",`up`,true);
        ajax.setRequestHeader('X-CSRF-TOKEN',$('meta[name="csrf-token"]').attr('content'));
        let form = new FormData();
        form.append('titulo',value.titulo);
        form.append('corpo',value.corpo);
        form.append('id',id)
        ajax.send(form);
        ajax.onload=e=>{
            console.log(ajax.responseText);
            this.salvo(document.querySelector(".yes"))
            document.querySelector(".yes").classList.remove('yes');
           
        }
    }
    ajaxPost(form,btn=false){
        if(btn){
            $(btn)[0].innerText="Postando..."
            $(btn)[0].disabled=true;
            this.btn=btn;
        }
        
        let ajax = new XMLHttpRequest();
        ajax.open("POST",`poster`,true);
        ajax.setRequestHeader('X-CSRF-TOKEN',$('meta[name="csrf-token"]').attr('content'));
        ajax.send(new FormData(form));
        ajax.onload=e=>{
            console.log(ajax.responseText);
            if(this.place){
                this.ajaxGet(this.place);
            }else{
                let place = prompt("Preciso do ID da tag pois dentro dela que vou imprimir o resultado. Qual é o ID?");
                let msg1="imprimir no console pois nenhum ID foi informado."
                let msg2=`imprimir no console pois não encontrei nehuma TAG com esse ID => '${place}'.`;
                palce?$(place)[0]?this.ajaxGet($(place)[0]):this.infoImp(msg2,place):this.infoImp(msg1,place);
            }
        }
     }
     infoImp(msg,value){
        console.log(value);
        alert(msg)
     }
     ajaxGet(place){
        let ajax = new XMLHttpRequest();
        ajax.open("GET",`/getemail`);
        ajax.send()
        ajax.onload=e=>{
            $("#print")[0].innerHTML=''
            JSON.parse(ajax.responseText).forEach(n =>this.imp(place,n));
            this.place=place;
            if(this.btn){
                $(this.btn)[0].disabled=false
                $(this.btn)[0].innerText="Postar"
            }
            this.onInitial();
        }
    
     }
     ajaxDelete(id){
        let ajax = new XMLHttpRequest();
        ajax.open("GET",`/del/${id}`,true);
        ajax.send();
        ajax.onload=e=>{
            let num = parseInt(ajax.responseText)
            document.querySelector(`div[data-id='${num}']`).remove()

        }
    
     }
     imp(places,valuesObj){
        /*
       <div class="container-fluid row mb-4 border-bottom">
           <blockquote class="blockquote text-justify  col-10">
               <h4>Título</h4>
               <p contenteditable="false" class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
               <footer class="blockquote-footer">Alguém famoso na <cite title="Título da fonte">Título da fonte</cite></footer>
               </blockquote>
               <div class="col-2">
                   <button type="button" class="btn btn-primary btn-xs btn-flat mb-3">Editar</button>
                   <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
               </div>
               
       </div>
        */
       let div = this.createTags({place:places,tag:'div',class:"container-fluid row mb-4 border-bottom"})
       div.dataset.id=valuesObj.id
       let block = this.createTags({place:div,tag:'blockquote',class:'blockquote text-justify  col-10',insertTag:`<h4>${valuesObj.titulo}</h4>`})
       this.createTags({place:block,tag:"p",contenteditable:false,class:"mb-0 p",insertTag:valuesObj.corpo})
       this.createTags({place:block,tag:"footer",class:"blockquote-footer",insertTag:`${valuesObj.autor}`})
       let d=this.createTags({place:div,tag:"div",class:"col-2"})
       this.createTags({place:d,tag:"button",type:"button",class:"btn btn-primary btn-xs btn-flat mb-2 edit",insertTag:"Editar"})
       this.createTags({place:d,tag:"button",type:"button",class:"btn btn-success btn-xs btn-flat mb-2 sal",insertTag:"Salvar"})
       this.createTags({place:d,tag:"button",type:"button",class:"btn btn-danger btn-xs btn-flat del",insertTag:"Excluir"})
       this.createTags({place:div,tag:"div",class:"salvo",style:"position:relative;left:-100px;"})
    }
    createTags(obj={}){ //Função modelo para criar TAGs na tela
        /*
        exemplo
        obj={
            place:local,
            tag:nome da tag que deseja criar,
            insertTag: É para inserir uma tag dentro dessa nova tag criada ou só uma mensagem dentro da tag
            tudo que adicionar depois disso é considerado atributo
            a chave é considerada o nome do atributo e o valor é o valor mesmo rsrs
        }
        */
        let tag;
        if(obj.place && obj.tag){
            tag = document.createElement(obj.tag);
            for(let key in obj){
                if(key != "place" && key != "tag" && key != "insertTag"){
                    let att = document.createAttribute(key)
                    att.value=obj[key];
                    tag.setAttributeNode(att)
                }
            }
            obj.insertTag?tag.innerHTML=obj.insertTag:0
            obj.place.appendChild(tag);
        }
        return tag
    }
    salvo(el){
        new Save(this.createTags({place:el.querySelector(".salvo"),tag:"span"}))
        
    }
    //LISTENERS
    onInitial(){
        this.onEdit();
        this. onEditOut();
        this.onDelete();
    }
    onDelete(){
        $('.del').on('click',e=>{
            let id = e.target.parentNode.parentNode.dataset.id
            this.ajaxDelete(id);
        })
    }
    onEditOut(){
        $(".sal").on("click",e=>{
            this.ajaxPut({titulo:this.title.innerText,corpo:this.body.innerText},e.target.parentNode.parentNode.dataset.id)
           this.body.contentEditable=false
           this.body.style.border="none";
           this.title.contentEditable=false
           this.title.style.border="none";
            e.target.parentNode.parentNode.classList.add('yes')
        })
    }
    onEdit(){
        $(".edit").on("click",e=>{
            this.body= e.target.parentNode.parentNode.querySelector(".p");
            this.title= e.target.parentNode.parentNode.querySelector("h4");
            this.body.contentEditable=true
            this.body.focus()
            this.body.style.border="1px solid green";
            this.title.contentEditable=true
            this.title.focus()
            this.title.style.border="1px solid green";
        })
    }
    //GETs and SETs
    get title(){return this._title}
    set title(valeu){this._title=valeu}
    get body(){return this._body}
    set body(valeu){this._body=valeu}
    get btn(){return this._btn}
    set btn(valeu){this._btn=valeu}
    get place(){return this._place}
    set place(valeu){this._place=valeu}
}