function calcularCPF() {
    var cpf = document.getElementById("cpf").value;
    if (isValidCPF(cpf)) {
        document.getElementById("resultado").innerHTML = "CPF válido.";
    } else {
        document.getElementById("resultado").innerHTML = "CPF inválido.";
    }
}

function isValidCPF(cpf) {
    // Remove non-digit characters
    cpf = cpf.replace(/\D/g, '');

    // Check if the CPF has 11 digits
    if (cpf.length !== 11) {
        return false;
    }

    // Check for repeated digits
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validate the first digit
    var sum = 0;
    for (var i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i);
    }
    var firstDigit = (sum * 10) % 11;
    if (firstDigit === 10 || firstDigit === 11) {
        firstDigit = 0;
    }
    if (firstDigit !== parseInt(cpf[9])) {
        return false;
    }

    // Validate the second digit
    sum = 0;
    for (i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
    }
    var secondDigit = (sum * 10) % 11;
    if (secondDigit === 10 || secondDigit === 11) {
        secondDigit = 0;
    }
    if (secondDigit !== parseInt(cpf[10])) {
        return false;
    }

    return true;
}