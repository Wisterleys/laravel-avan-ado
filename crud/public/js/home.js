$(window).on("load", function(){
    let email = localStorage.getItem("email")?localStorage.getItem("email"):false;
    email?ajaxGet(email):0
    $("#post").on('click',e=>{
        ajaxPost($("#form")[0]);
    })
 });
 function ajaxPost(form){
    let ajax = new XMLHttpRequest();
    ajax.open("POST",`/post`);
    ajax.send(new FormData(form))
    ajax.onload=e=>{
        console.log(ajax.responseText)
    }
 }
 function ajaxGet(email){
    let ajax = new XMLHttpRequest();
    ajax.open("GET",`/get/${email}`);
    ajax.send()
    ajax.onload=e=>{
        console.log(ajax.responseText)
    }

 }