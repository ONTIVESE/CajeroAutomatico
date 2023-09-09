/*----------Aqui empieza el código para el nav de la pagina consultar saldo---------*/

let usernameLocalStore = localStorage.getItem("nombreUsuario");
document.querySelector(".username").textContent = `Bienvenido ${usernameLocalStore}`;

/*-------------aqui termina--------------------------------------------------------*/





//--------Aqui empieza el código para ir controlando el saldo actual del usuario---------*/

// localStorage.setItem('saldoActual', saldoInicial);

let saldoActual = localStorage.getItem('saldoActual');

document.querySelector('#saldoActual').textContent = `$ ${saldoActual}`;






/*-------------aqui termina--------------------------------------------------------*/












