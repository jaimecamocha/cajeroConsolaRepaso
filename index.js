// JAIME FERNÁNDEZ CALVO
//

let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

function mostrarSaldo(){
    console.log(`Su saldo actual es: ${saldo.toFixed(2)} €`);
}

function depositar(){
    const deposito = parseFloat(prompt("Ingrese la cantidad de depositar: "));
    if(isNaN(deposito) || deposito <= 0){
        console.log("Cantidad inválida. Inténtelo de nuevo.")
    } else{
        saldo = saldo + deposito;
        console.log(`Se han depositado ${deposito.toFixed(2)} €`);
    }
} 

function retirar(){
    const retiro = parseFloat(prompt("Ingrese la cantidad de retirar: "));
    if(isNaN(retiro) || retiro <= 0){
        console.log("Cantidad inválida. Inténtelo de nuevo.")
    } else{
        saldo = saldo - retiro;
        console.log(`Se han retirado ${retiro.toFixed(2)} €`);
    }
}

function transferir(){

}

function iniciarSesion(){

}

function operacionesCajero(){

}

iniciarSesion();