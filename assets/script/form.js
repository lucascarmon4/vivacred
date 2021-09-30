var botao = document.getElementById('submit-botao');
var inputs = document.querySelectorAll(".form-input");
let temErroNome = false;
let temErroCpf = false;
let temErroEmail = false;
let temErroTelefone = false;
let temErroMensagem = false;
var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var email = document.getElementById('email');
var telefone = document.getElementById('telefone');
var mensagem = document.getElementById('mensagem');


function mudarClasse(){
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const originalPlaceholder = input.placeholder;
        input.addEventListener('focus', (event) => {
            const clicado = event.target;
            clicado.classList.remove("input-error");
            clicado.placeholder = '';
            })
        input.addEventListener('blur', (event) => {
            event.target.classList.add("input-error");
            event.target.placeholder = originalPlaceholder;
            if(event.target.value.length == 0){
                event.target.classList.add("input-error");
            } else {
                event.target.classList.remove("input-error");
            }
        })
    }   
}
    

botao.addEventListener("click", (event) => {
    if (nome.value == '' || !isNaN(nome.value)) {
        nome.classList.add("input-error");
        nome.placeholder = "Nome inválido.";
        temErroNome = true;
        nome.value = "";
        mudarClasse();
   
    } else {
        nome.classList.remove("input-error");
        nome.placeholder = "Digite seu nome e sobrenome.";
        temErroNome = false;
    }

    if (cpf.value.length === 14) {
        cpf.classList.remove("input-error");
        cpf.placeholder = "Digite seu CPF.";
        temErroCpf = false; 
        
        
    } else {
        cpf.classList.add("input-error");
        cpf.placeholder = "CPF inválido.";
        temErroCpf = true;
        mudarClasse();
        cpf.value = "";


    }

    if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") - email.value.indexOf("@") == 1) {
        email.classList.add("input-error");
        email.placeholder = "Email inválido.";
        temErro = true;
        temErroEmail = true;
        mudarClasse();
        email.value = "";


    } else {
        email.classList.remove("input-error");
        email.placeholder = "exemplo@seudominio.com";
        temErroEmail = false;
    }

    if (telefone.value.length !== 15){
        telefone.classList.add("input-error");
        telefone.placeholder = "Telefone inválido.";
        temErroTelefone = true;
        mudarClasse();
        telefone.value = "";
        

    } else {
        telefone.classList.remove("input-error");
        telefone.placeholder = "(XX) XXXXX-XXXX";
        temErroTelefone = false;

    }

    if (mensagem.value == ''){
        mensagem.classList.add("input-error");
        mensagem.placeholder = "O campo de mensagem não pode estar vazio.";
        temErroMensagem = true;
        mudarClasse();
        mensagem.value = "";


    } else {
        mensagem.classList.remove("input-error");
        mensagem.placeholder = "Digite sua mensagem.";
        temErroMensagem = false;
    }

if (temErroNome || temErroCpf || temErroEmail || temErroTelefone || temErroMensagem) {
    event.preventDefault();
}

})


