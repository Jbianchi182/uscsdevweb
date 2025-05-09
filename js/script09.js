function calcularMinutos(){
    var horas = document.getElementById("horario").value;
    var totalSegundos = (parseInt(horas) * 3600);
    var totalMinutos = (parseInt(horas) * 60);
    document.getElementById("resultado").innerHTML = horas + " horas em minutos corresponde a " + totalMinutos + " minutos, e em segundos corresponde a " + totalSegundos + " segundos.";

}