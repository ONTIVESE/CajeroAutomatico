//LocalStorage: Guarda cadenas de texto, datos necesarios (clave => valor)
//SET => Guardando
//GET => Obtener

// const nombre= 'Sergio';
// localStorage.setItem('nombreUsuario', nombre);
// const nombreLocalStorege= localStorage.getItem('nombreUsuario');
// console.log(nombreLocalStorege);

// const username = document.getElementById('username').value;
// const password = document.getElementById('password');

let pantallaPrincipal = "../docs/pantallaPrincipal.html";


const cuentaUsuarios = {
  userName: 'sergio ontiveros',
  password: '1234',
  saldoMin: 10,
  saldoMax: 990,
  saldoInicial:10,

  
}


//Codigo para el botón de Acceder de la pantalla de login.
function login() {
  // const userData = username.value.toLowerCase(); //aqui convertimos el texto del input en minuscula 
  // const userPassword = password.value
  let username = document.getElementById('username').value.toLowerCase();
  let password = document.getElementById('password').value;



  if (username === cuentaUsuarios.userName && password === cuentaUsuarios.password) {

    localStorage.setItem('nombreUsuario', username);
    // localStorage.setItem('passwordUsuario', password);
    localStorage.setItem('saldoMin', cuentaUsuarios.saldoMin);
    localStorage.setItem('saldoMax', cuentaUsuarios.saldoMax);
    localStorage.setItem('saldoInicial', cuentaUsuarios.saldoInicial);
    localStorage.setItem('saldoActual', cuentaUsuarios.saldoInicial);

    window.location = pantallaPrincipal;

  } else if (username === "" && password === "") {
    alert("Favor de ingresar usuario y contraseña");
  } else if (username != userUno.userName && password != cuentaUsuarios.password) {
    alert("Usuario y Contraseña incorrectos!!");
  } else if (username != userUno.userName && password == cuentaUsuarios.password) {
    alert("Usuario incorrecto!!");
  } else if (username == userUno.userName && password != cuentaUsuarios.password) {
    alert("Contraseña incorrecta!!");
  }
}