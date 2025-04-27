function checarPares(){
    var numero = parseInt(document.getElementById("par").value, 10);
    var resultado = document.getElementById("resultado");
    var soma = numero;

    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido.";
    }
    else {
        if (numero%2===0) {
            var i = numero;
                for (i = i-2; i >0 ; i -=2) {
                    soma += i;
                }
      }
        else {
            var i = numero-1;
            soma = soma-1;
                for (i = i-2; i > 0; i -=2) {
                soma += i;
                }

            }
        resultado = soma;
        document.getElementById("resultado").innerHTML = "A soma dos numeros pares anteriores ao número " + numero + " é " + resultado;

    } 
}