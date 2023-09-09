/*----------Aqui empieza el código para el nav de la pagina consultar saldo---------*/

let usernameLocalStore = localStorage.getItem("nombreUsuario");
document.querySelector(".username").textContent = `Bienvenido ${usernameLocalStore}`;

/*-------------aqui termina--------------------------------------------------------*/

let saldoMin = Number(localStorage.getItem("saldoMin")); //esta linea de código obtiene el valor del Id saldoMin desde el localStorage

/*----------Aqui empieza el código de la función para el botón de aceptar al hacer un retiro---------*/

/*--Inicia la función retirar--*/
function retirar() {
    let retiro = document.getElementById("monto_retirar").value; //obtiene el valor que el usuario coloca en el input del monto a retirar

    let saldoActual = Number(localStorage.getItem("saldoActual")); //obtiene el valor desde el localStorage del Id 'saldoActual' y lo almacéna en esta variable de nombre saldoActual

    let saldoFuturo = saldoActual - Number(retiro); //Hace una resta futura del saldoActual - el saldo nuevo que va a retirar el usuario

    //este if valida que el valor ingresado sea diferente de no es numero
    /*--Inicia el if (!isNaN(ingreso)) {--*/
    if (!isNaN(retiro) && retiro > 0) {
        if (saldoFuturo < saldoMin) {
            alert(
                `Monto maximo a retirar permitido $${saldoActual - saldoMin}`
            );
            document.getElementById("monto_retirar").value = ""; //esta linea de código borra la información del input cuando el usuario da click al botón aceptar.
            document.getElementById("monto_retirar").focus();
        } else {
            //este if condiciona y deja retirar saldo al usuario mientras el saldo actual sea mayor al saldo minimo ($10)
            if (saldoActual > saldoMin) {
                /*--Inicia el if (saldoActual > saldoMin)*/
                retiro = document.getElementById("monto_retirar").value; //esta linea de código obtiene el valor que el usuario coloca en el input del monto a retirar

                localStorage.setItem("montoretirado", retiro); //esta linea de código crea un localStorage con el id 'montoretirado' y como valor le coloca el valor de la variable retiro
                document.getElementById("monto_retirar").value = ""; //esta linea de código borra la información del input cuando el usuario da click al botón aceptar.
                alert("El movimiento se realizó con éxito");
                document.getElementById("monto_retirar").focus(); //Posiciona el cursor en el input de ingreso

                saldoActual -= Number(retiro); //este codigo hace una resta del saldoActual -  saldoActual - ingreso (este ultimo es el nuevo valor que el usuario ingresa en el input)
                localStorage.setItem("saldoActual", saldoActual); //este código colóca el nuevo valor de saldoActual en el Id 'saldoActual' del localStorage
            } /*--Termina el if (saldoActual < saldoMin) valor true*/

            // este else alerta al usuario cuando el saldo actual es mayor al saldo maxico
            else {
                alert(
                    "Has llegado al limite maximo de ingreso de saldo, no puedes retirar más saldo"
                );
                document.getElementById("monto_retirar").value = ""; //esta linea de código borra la información del input cuando el usuario da click al botón aceptar.
                document.getElementById("monto_retirar").focus(); //Posiciona el cursor en el input de ingreso
            }
        }
    } /*--termina el if (!isNaN(ingreso)) valor true--*/

    // este else alerta al usuario cuando el valor ingresado es diferente a number
    else {
        alert("Valor No permitido, Intente de nuevo!!");
        document.getElementById("monto_retirar").value = ""; //esta linea de código borra la información del input cuando el usuario da click al botón aceptar.
        document.getElementById("monto_retirar").focus();
    }
} /*--Cierra la función--*/

/*-------------aqui termina--------------------------------------------------------*/

/*----------función para cancelar los valores ingresados en el input----------*/
function cancelar() {
    document.getElementById("monto_retirar").value = "";
    document.getElementById("monto_retirar").focus();
}
/*-------------aqui termina--------------------------------------------------------*/
