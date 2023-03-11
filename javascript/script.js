let email = document.getElementById("email");
let senha = document.getElementById("senha");

function retornoDoLogin(event) {
        event.preventDefault();

        let emailDigitado = email.Value;
        let senhaDigitada = senha.Value;

        console.log(emailDigitado);
        console.log(senhaDigitada);
}