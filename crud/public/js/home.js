$(window).on("load", function(){
    //let email = localStorage.getItem("email")?localStorage.getItem("email"):false;
    //email?ajaxGet(email):0
    ajaxGet()
    $("#form").on('submit',e=>{
        e.preventDefault();
        console.log("!")
        ajaxPost($("#form")[0]);
    })
 });

 function ajaxPost(form){
    let ajax = new XMLHttpRequest();
    ajax.open("POST",`poster`,true);
    ajax.setRequestHeader('X-CSRF-TOKEN',$('meta[name="csrf-token"]').attr('content'));
    ajax.send(new FormData(form))
    ajax.onload=e=>{
        console.log(ajax.responseText);
        ajaxGet();
    }
 }

 function ajaxGet(){
    let ajax = new XMLHttpRequest();
    ajax.open("GET",`/getemail`);
    ajax.send()
    ajax.onload=e=>{
        $("#print")[0].innerHTML=''
        JSON.parse(ajax.responseText).forEach(n =>imp($("#print")[0],n));
    }

 }
 function imp(places,valuesObj){
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
    let div = createTags({place:places,tag:'div',class:"container-fluid row mb-4 border-bottom"})
    let block = createTags({place:div,tag:'blockquote',class:'blockquote text-justify  col-10',insertTag:`<h4>${valuesObj.titulo}</h4>`})
    createTags({place:block,tag:"p",contenteditable:false,class:"mb-0",insertTag:valuesObj.corpo})
    createTags({place:block,tag:"footer",class:"blockquote-footer",insertTag:`${valuesObj.email}`})
    let d=createTags({place:div,tag:"div",class:"col-2"})
    createTags({place:d,tag:"button",type:"button",class:"btn btn-primary btn-xs btn-flat mb-3",insertTag:"Editar"})
    createTags({place:d,tag:"button",type:"button",class:"btn btn-danger btn-xs btn-flat",insertTag:"Editar"})
 }
 
   function createTags(obj={}){ //Função modelo para criar TAGs na tela
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
 