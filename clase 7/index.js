

console.log('3.estoy en arch externo');
/*

comentarios multiples*/
//console.log ('ESTO ES UN COMENTARIO DE 1 LINEA')
//como se maneja js
//PALABRAS RESERVADAS dar indicaciones de tareas o funciones al leng de programacion
/*Var
let
function
if 
LAS MAY Y MINusc LAS TOMA TAL CUAL Y CASA Y casa no es lo mesmo algo sensitive*/

//variables es un espacio de memoria para guardar datos , se guarda en ram desps desapir
//declaracion de una variable
var nombre; //no es obligatorio el ;
//asignacion de una variable
// = es un operador de asignacion
nombre='ceci';

//cuando querermos recuperar info...TODO ESTO SE VE PROBANDO EN EL NAVEGADOR IR A INPECCIONAR LUEGO A CONSOLA

console.log(nombre);
var apellido = 'corvalan';  //js es flexible
console.log(apellido);
var provincia = 'SANTIAGO';  
console.log(provincia);
//concatenar datos
console.log('mi nombre es: ' + nombre + ' y mi apellido es: '+ apellido +'y vivo en la prov de ' + provincia );
console.log('----------------------------------------------');
//template string interpolar variables con string aqui uso la comilla espcial alt 96 una diferente para string
//o atgr llave q cierra
console.log(`mi nombre es ${nombre} y mi apellido es ${apellido} y vivo en la provincia ${provincia}`);

    let pais = 'argentina';
    var apellido = 'Gomez';
    console.log('mi nombre es: ' + nombre + ' y mi apellido es: '+ apellido +'y vivo en la prov de ' + provincia );

    console.log(pais);
 //   let pais = 'uruguay'; no se puede usar dos veces da error
//contantes no cambian

const DNI = '23886528';
console.log(DNI);

//OPERADORES: +-*/%

let numuno = 1000;
let numdos = 5000;
resultado = numuno+numdos;
console.log(resultado);
console.log('----------------------------------------------');
resultado = numdos - numuno;
console.log(resultado);
console.log('----------------------------------------------');
resultado = numuno * numdos;
console.log(resultado);
console.log('----------------------------------------------');
resultado = numdos / numuno;//resultado de division
console.log(resultado);
console.log('----------------------------------------------');
resultado = numdos % numuno; //resto de la division 
console.log(resultado);
//boolean

let verdadero = true;
let falso = false;

//operadoresrelacionaes =   == < > >= >= ! el distinto

let edad = 18;
//condicionales if selecciona de una opc u otra
if(edad > 18){
    console.log('1.puedes comprar bebidas');
}
if(edad < 18){
    console.log('2. SOS MENOR DE EDA');
}
if(edad >= 18){
    console.log('3.puedes comprar siiii');
}
if(edad <= 18){
    console.log('4. NOOOOOO puedes comprar');
}
if(edad == 18){
    console.log('5.SON ESTRICTAMENTE IGUALEE');
}

let password = 123456789;
if(password===123456789){
    console.log('podes tener acceso a tu cuenta bancaria');
}
let a = 5;
console.log(a == 5); true
console.log(a != 5); false
console.log(!true); false
console.log(!false); true

/* ensayito yo sola
let nombreingresado = prompt ('ingrese su nombre');
alert('hola mundo cruel!');*/

console.log('----------------------------------------------');
//operadores logicos y && es el y logico(todas las condiciones deben ser true)  y || es el o logico 
let cliente = true; //suponer que todos son clientes
let pagoaldia = false;
let dia ='viernes';

if (!cliente && dia == 'lunes') {  // la primera cond es false
    console.log('lo sentimos no tenemos oferta para ud hoy');
}
if(cliente && dia =='lunes');{
console.log('por ser cliente tienes un 50% de descuento por ser viernes');}

if(cliente && dia =='viernes');{
    console.log('por ser cliente y ser dia viernes tienes un 70% de descuento');}
/* existen otras formas para usar en nuestro programa
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    } */
// todo falso no ejecuta
    if (!cliente || dia == 'lunes' || pagoaldia) {  // la primera cond es false
        console.log('lo sentimos no tenemos oferta para ud hoy');}
        // true             false       false       =true
        if(cliente && dia =='lunes  || pagoaldia');{
            console.log('por ser cliente tienes un 50% de descuento por ser viernes');}   
          //      true            true
            if(cliente && dia =='viernes');{
                console.log('por ser cliente y ser dia viernes tienes un 70% de descuento');}
                console.log('----------------------------------------------');

    let uduario = 'ceci';
    let facial = false;
    // pasa porq todo es true

    if( usuario = 'ceci'&& password == 123456789);{
        console.log('bienvenido al sistema ceci');}
       //       true            true                    false ----false 
        if( usuario = 'ceci'&& password == 123456789 || facial );{
            console.log('bienvenido al sistema ceci');}
//                  true            false                   false       --- resultado true
            if( usuario = 'ceci' || password == 123456789 || facial );{
                console.log('bienvenido al sistema ceci');}
        console.log('----------------------------------------------');
/*
       if (condition) {
        
       } else {
        
       }*/
    
       if( usuario = 'ceci' && password == 123456789 && facial ){
        console.log('bienvenido al sistema ceci')}
        else{ console.log('usuario o password incorrecto'); }
/*alert funcion modal para enviar mensajes
prompt funcion modal para introducir datos*/

