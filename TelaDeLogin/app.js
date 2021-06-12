var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


var capturando = "",
function capturar (){
    capturando = document.getElementById('nome').value;
    capturando = document.getElementById('email1').value;
    

}