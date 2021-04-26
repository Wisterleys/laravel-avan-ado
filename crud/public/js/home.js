$(window).on("load", function(){
    let email = localStorage.getItem("email")?localStorage.getItem("email"):false;
    email?ajaxGet(email):0
    document.querySelector("#form").addEventListener('submit',e=>{
        e.preventDefault();
        console.log("!")
        ajaxPost($("#form")[0]);
    })
 });
 function ajaxPost(form){
    let ajax = new XMLHttpRequest();
    ajax.open("POST",`/post`,true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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