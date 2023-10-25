// JAIME FERNÁNDEZ CALVO
//

let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

 // mostrar saldo
function mostrarSaldo(){
    console.log(`Su saldo actual es: ${saldo.toFixed(2)} €`);
}

// depositar dinero
function depositar(){
    const deposito = parseFloat(prompt("Ingrese la cantidad de depositar: "));
    if(isNaN(deposito) || deposito <= 0){
        console.log("Cantidad inválida. Inténtelo de nuevo.")
    } else{
        saldo = saldo + deposito;
        console.log(`Se han depositado ${deposito.toFixed(2)} €`);
    }
}

// retirar dinero
function retirar(){
    const retiro = parseFloat(prompt("Ingrese la cantidad de retirar: "));
    if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
        console.log("Cantidad inválida. Inténtelo de nuevo.")
    } else{
        saldo = saldo - retiro;
        console.log(`Se han retirado ${retiro.toFixed(2)} €`);
    }
}

// transferir dinero
function transferir(){
    const monto = parseFloat(prompt("Ingrese la cantidad a transferir: "));
    if(isNaN(monto) || monto <= 0 || monto > saldo){
        console.log("Cantidad inválida. Inténtelo de nuevo.")  
    } else{
        const cuentaDestino = parseFloat(prompt("Ingrese la cuenta destino: "));
        //esValidaEstructuraIBAN(cuentaDestino);
        console.log(`Se han transferido ${monto.toFixed(2)} € a la cuenta ${cuentaDestino}`);
        saldo = saldo - monto;
        mostrarSaldo();
    } 
}

// iniciar sesión
function iniciarSesion(){
    let pin = prompt("Ingrese su PIN: ");
    while(pin !== PIN_CORRECTO && intentosRestantes > 1){
        intentosRestantes --;
        console.log(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`);
        pin = prompt("Ingrese su PIN: ");
    }

    if(pin = PIN_CORRECTO){
        console.log("INICIO DE SESIÓN EXITOSO");
        mostrarSaldo();
        operacionesCajero();
    } else{
        console.log("PIN incorrecto. El cajero se ha bloqueado");
    }
}

// operaciones del cajero
function operacionesCajero(){

}
 // validar cuenta bancaria (no se va a usar)
function esValidaEstructuraIBAN(cuentaAValidar){
    return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuentaAValidar);
}

// llamada  la función de inicio de sesión
iniciarSesion();