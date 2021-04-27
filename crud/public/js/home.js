$(window).on("load", function(){
    let ajax= new AjaxController();
    ajax.ajaxGet($("#print")[0])
    $("#form").on('submit',e=>{
        e.preventDefault();
        let confi=true;
        !$('#titulo')[0].value||!$('#corpo')[0].value?confi=false:0
       confi?ajax.ajaxPost($("#form")[0],'#post'):0
       console.log($('#titulo')[0].value,$('#corpo')[0].value)
    })
 });
 