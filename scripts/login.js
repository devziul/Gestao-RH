document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault(); //nao faz o envio padrao do formulario
const username = document.getElementById("usuario").value;
const password = document.getElementById("password").value; //aqui ele vai guardar o que o a pessoa escreveu nos dois campos

const validUsername = "admin"; //usuario e senha pra logar
const validPassword = "1234";

if (username === validUsername &&  password === validPassword) { //se tiver tudo certo entra no dentro do sistema
    window.location.href = "dashboard.html";
} else {
    document.getElementById("errorMsg").innerText = "Usuario ou senha incorretos!"; //se nao aparece essa mensagem 
}

});