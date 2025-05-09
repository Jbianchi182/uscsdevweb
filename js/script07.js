function calcularPrimos(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var primos = [];
    for (var i = numero1; i <= numero2; i++) {
        if (isPrimo(i)) {
            primos.push(i);
        }
    }
    document.getElementById("resultado").innerHTML = "Números primos entre " + numero1 + " e " + numero2 + ": " + primos.join(", ");
}
function isPrimo(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}