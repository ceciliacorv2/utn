let user = prompt('ingrese su usuario')
let pass = prompt('ingrese su contraseña')
console.log(user);
console.log(pass);

if (user=='pepe'&& pass == 1234){
    alert('bienvenido al sistema');
    //funcion de js windows: para llevar al user a otra pag
    window.location.href = 'admin.html'
}else{
    alert ('usuario o contra incorrecto');
    window.location.href = 'error.html'
}