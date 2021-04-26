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
        console.log(ajax.responseText)
    }

 }