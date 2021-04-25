$("#click").on("click",e=>{
    localStorage.setItem("email",$("#email")[0].value)
})
$(window).on("load", function(){
    let email = localStorage.getItem("email");
    console.log(email?email:"nada!")
 });