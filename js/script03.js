function checarIdade() {
    const idade = parseInt(document.getElementById("idade").value, 10);
    const resultado = document.getElementById("resultado");

    if (isNaN(idade)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido."; }
    else if (idade < 12){
            document.getElementById('resultado').innerHTML = "Com essa idade você é criança"; } 
    else if (idade >= 12 && idade < 18) {
            document.getElementById('resultado').innerHTML = "Com essa idade você é adolescente"; } 
    else if (idade >= 18 && idade <= 60) {
            document.getElementById('resultado').innerHTML = "Com essa idade você é adulto"; }
    else if (idade > 60) {
            document.getElementById('resultado').innerHTML = "Com essa idade você é idoso"; }
  }