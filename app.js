
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste al número en ${intentos} ${(intentos === 1) ?'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        limpiarCaja();
        intentos ++;
    }
   
    return;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p',`Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();