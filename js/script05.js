function gerarrandom(){
return Math.floor(Math.random() * 10) + 1;
}

let numeroAleatorio =  gerarrandom();

function checarrandom(){
var palpite = parseInt(document.getElementById("palpite").value);
const resultado = document.getElementById("resultado");

    if(isNaN(palpite)){
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido.";
    }
    else {
        if(palpite === numeroAleatorio){
            document.getElementById('resultado').innerHTML = "Você acertou!!";
        }
        else{
            if(palpite > numeroAleatorio){
                document.getElementById('resultado').innerHTML = "Você errou, tente um número mais baixo."
            }
            else{
                document.getElementById('resultado').innerHTML = "Você errou, tente um número mais alto."
            }
        }
    }
}

function reiniciarrandom(){
    numeroAleatorio = gerarNumeroAleatorio();
    resultado.innerHTML = "Novo jogo! Faça seu palpite.";
    document.getElementById("palpite").value = "";
}