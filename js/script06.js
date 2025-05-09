function calcularFatorial(){
    var numero = document.getElementById("numero").value;
    var resultado = 1;

    for (numero; numero > 1; numero--) {
        resultado *= numero;
    }

    document.getElementById("resultado").innerHTML = "O fatorial de " + document.getElementById("numero").value + " é: " + resultado;
}