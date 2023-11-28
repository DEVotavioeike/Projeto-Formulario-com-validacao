

const inputs = document.querySelectorAll('.container-input1');
const span = document.querySelectorAll('.campo-obrigatorio');
const inputMensagem = document.querySelector('.container-input2');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefone = /^(\d{9}|\d{11})$/;

function campoNaoPreenchido(valor){
    inputs[valor].style.border = '2px solid #F52E2E';
    span[valor].style.visibility = 'visible';
}

function campoPreenchido(valor){
    inputs[valor].style.border = '2px solid #00C22B';
    span[valor].style.visibility = 'hidden';
}

function inputMensagemNaoPreenchido(){
    inputMensagem.style.border = '2px solid #F52E2E';
    span[3].style.visibility = 'visible';
}

function inputMensagemPreenchido(){
    inputMensagem.style.border = '2px solid #00C22B';
    span[3].style.visibility = 'hidden';
}

function verificarNome(){
    if(inputs[0].value.length < 3){
        campoNaoPreenchido(0);
    }else{
        campoPreenchido(0);
    }
}

function verificarEmail(){
    if(!regexEmail.test(inputs[1].value)){
        campoNaoPreenchido(1);
    }else{
        campoPreenchido(1);
    }
}

function verificarTelefone(){
    if(!regexTelefone.test(inputs[2].value)){
        campoNaoPreenchido(2);
    }else{
        campoPreenchido(2);
    }
}

function verificarMensagem(){
    if(inputMensagem.value.length < 3){
        inputMensagemNaoPreenchido();
    }else{
        inputMensagemPreenchido();
    }
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    if(inputs[0].value.length < 3 || !regexEmail.test(inputs[1].value) || !regexTelefone.test(inputs[2].value) || inputMensagem.value.length < 3) {
        var valorVerdadeiro = 1;
    }

    if (valorVerdadeiro == 1) {
      alert('Campos obrigatorios podem estar vazio ou preenchidos inadequadamente. Preencha-os antes de enviar.');
      event.preventDefault(); // Impede o envio do formulário
    }else{
        alert('Formulario enviado com sucesso.');
    }
  });