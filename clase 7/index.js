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
