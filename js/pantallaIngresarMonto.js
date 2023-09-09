/*----------Aqui empieza el código para el nav de la pagina consultar saldo---------*/

let usernameLocalStore = localStorage.getItem("nombreUsuario");
document.querySelector(
    ".username"
).textContent = `Bienvenido ${usernameLocalStore}`;

/*-------------aqui termina--------------------------------------------------------*/

let saldoMax = Number(localStorage.getItem("saldoMax")); //esta linea de código obtiene el valor del Id saldoMax desde el localStorage

/*----------Aqui empieza el código de la función para el botón de aceptar al hacer un deposito---------*/

/*--Inicia la función ingresar--*/
function ingresar() {
    let ingreso = document.getElementById("montoingresar").value; //obtiene el valor que el usuario coloca en el input del monto a ingresar

    let saldoActual = Number(localStorage.getItem("saldoActual")); //obtiene el valor desde el localStorage del Id 'saldoActual' y lo almacéna en esta variable de nombre saldoActual

    let saldoFuturo = Number(ingreso) + saldoActual; //Hace una suma futura del saldoActual + el saldo nuevo que va a ingresar el usuario

    //este if valida que el valor ingresado sea diferente de no es numero
    /*--Inicia el if (!isNaN(ingreso)) {--*/
    if (!isNaN(ingreso) && ingreso > 0) {
        if (saldoFuturo > saldoMax) {
            alert(
                `Monto maximo a depositar permitido $${saldoMax - saldoActual}`
            );
            document.getElementById("montoingresar").value = ""; //esta linea de código borra la información del input cuando el usuario da click al botón aceptar.
            document.getElementById("montoingresar").focus();
        } else {
            //este if condiciona y deja ingresar saldo al usuario mientras el saldo actual sea menor al saldo maximo ($990)
            if (saldoActual < saldoMax) {
                /*--Inicia el if (saldoActual < saldoMax)*/
                ingreso = document.getElementById("montoingresar").value; //esta linea de código obtiene el valor que el usuario coloca en el input del monto a ingresar

                localStorage.setItem("montoingresado", ingreso); //esla linea de código crea un localStorage con el id 'montoingresado' y como valor le coloca el valor de la variable ingreso
                document.getElementById("montoingresar").value = ""; //esla linea de código borra la información del input cuando el usuario da click al botón aceptar.
                alert("El movimiento se realizó con éxito");
                document.getElementById("montoingresar").focus(); //Posiciona el cursor en el input de ingreso

                saldoActual += Number(ingreso); //este codigo hace una suma del saldoActual +  saldoActual + ingreso (este ultimo es el nuevo valor que el usuario ingresa en el input)
                localStorage.setItem("saldoActual", saldoActual); //este código colóca el nuevo valor de saldoActual en el Id 'saldoActual' del localStorage
            } /*--Termina el if (saldoActual < saldoMax) valor true*/

            // este else alerta al usuario cuando el saldo actual es mayor al saldo maxico
            else {
                alert(
                    "Has llegado al limite maximo de ingreso de saldo, no puedes ingresar más saldo"
                );
                document.getElementById("montoingresar").value = ""; //esta linea de código borra la información del input cuando el usuario da click al botón aceptar.
                document.getElementById("montoingresar").focus(); //Posiciona el cursor en el input de ingreso
            }
        }
    } /*--termina el if (!isNaN(ingreso)) valor true--*/

    // este else alerta al usuario cuando el valor ingresado es diferente a number
    else {
        alert("Valor No permitido, Intente de nuevo!!");
        document.getElementById("montoingresar").value = ""; //esla linea de código borra la información del input cuando el usuario da click al botón aceptar.
        document.getElementById("montoingresar").focus();
    }
} /*--Cierra la función--*/

/*-------------aqui termina--------------------------------------------------------*/

/*----------función para cancelar los valores ingresados en el input----------*/
function cancelar() {
    document.getElementById("montoingresar").value = "";
    document.getElementById("montoingresar").focus();
}
/*-------------aqui termina--------------------------------------------------------*/
