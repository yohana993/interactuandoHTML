const contadorElemento = document.getElementById('contador');
const btnsumarElemento = document.getElementById('DiseñoWeb');
const btnsumaElemento = document.getElementById('JavaScript');
const btnsumElemento = document.getElementById('BaseD');

let contador = 0;

let votosDW = 0;
let votosJS = 0;
let votosBD = 0;

const spanDW = document.getElementById('votos-dw');
const spanJS = document.getElementById('votos-js');
const spanBD = document.getElementById('votos-bd');

btnsumarElemento.addEventListener('click', function(){
    votosDW++;
    contador++;
    contadorElemento.textContent = "Votos actuales: " + contador;
    spanDW.textContent = votosDW;
    mensaje ();
    mensajeAlerta();
});

btnsumaElemento.addEventListener('click', function(){
    votosJS++;
    contador++;
    contadorElemento.textContent = "Votos actuales: " + contador;
    spanJS.textContent = votosJS;
    mensaje ();
    mensajeAlerta();
});

btnsumElemento.addEventListener('click', function(){
    votosBD++;
    contador++;
    contadorElemento.textContent = "Votos actuales: " + contador;
    spanBD.textContent = votosBD;
    mensaje ();
    mensajeAlerta();
});

function mensajeAlerta () {
    if (contador > 0 && contador % 5 === 0) {
        console.log("¡Has alcanzado " + contador + " votos!");
    }
}

function mensaje () {
    alert ("Gracias por tu Voto!")
}
