// var btnSignin = document.querySelector("#signin");
// var btnSignup = document.querySelector("#signup");

// var body = document.querySelector("body");


// btnSignin.addEventListener("click", function () {
//    body.className = "sign-in-js"; 
// });

// btnSignup.addEventListener("click", function () {
//     body.className = "sign-up-js";
// })


// var capturando = "",
// function capturar (){
//     capturando = document.getElementById('nome').value;
//     capturando = document.getElementById('email1').value;
    

// }


// DECLAREI UMA VARIAVEL PARA ARMAZENAR O VALOR DO QUE EU VOU CAPTURAR COM COM O CLICK DO MOUSE
var capNome = "";


function captura(){
    
    // ESSE LINHA CAPTURA O VALOR DO INPUT NOME PELO (ID="NOME") LA NO CODIGO HTML 
    capNome = document.getElementById('nome').value;

    // ESSA LINHA MOSTRA UM ALERTA NA TELA 
    alert("Bem-vindo(a) - "+capNome + "\n" + "Você receberá um e-mail com todas as novidades!" )
}
