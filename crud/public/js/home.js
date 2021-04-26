$(window).on("load", function(){
    let ajax= new AjaxController();
    ajax.ajaxGet($("#print")[0])
    $("#form").on('submit',e=>{
        e.preventDefault();
        ajax.ajaxPost($("#form")[0],'#post');
    })
 });
 