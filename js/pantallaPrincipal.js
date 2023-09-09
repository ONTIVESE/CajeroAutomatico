/*----------Aqui empieza el código para el nav de la pagina consultar saldo---------*/

let usernameLocalStore = localStorage.getItem("nombreUsuario");
document.querySelector(".username").textContent = `Bienvenido ${usernameLocalStore}`;

/*-------------aqui termina--------------------------------------------------------*/


const exit = function () {
  if (window.confirm("¿Deseas salir de tu cuenta?")) {
    window.location = ("../docs/index.html");


    //estos codigos eliminan la información almacenada en el localStorage cuando el usuario cierra sesión
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('saldoMin');
    localStorage.removeItem('saldoMax');
    localStorage.removeItem('saldoInicial');
    localStorage.removeItem('saldoActual');
    localStorage.removeItem('montoingresado');
  }
}



