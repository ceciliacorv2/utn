let banana = 'banana';
let manzana ='manzana';
let pera ='pera';

//array es un arreglo vector, conj de datos relacionados entre si se maneja con un indice
 //               1       2           3       4
let frutas = ['mango','banana','manzana','pera'];
let persona = ['pepe', 1234567889,'san martin 200','7','22222222',['juan','mario'], 'argentina', true];
console.log(frutas);
console.log('--------------------------------');
console.log(persona);

//muestro solo manzana
console.log('el elemento del indice 0 es' + frutas[0]);
console.log('el elemento del indice 1 es' + frutas[1]);
console.log('el elemento del indice 2 es' + frutas[2]);
console.log('el elemento del indice 3 es' + frutas[3]);

console.log('--------------------------------');

console.log(persona[5],[1]);

//bucles. la i es igual al index. es una estructura repetiiva de cod
//for(let i = 0; i < array.length; index++){

for(let i = 0; i < 10; i++){ 
    console.log('estamos contando de 0 a 9' + i);
}
console.log('________________________');
console.log(persona,length);
console.log('________________________');
for(let i = 0; i < persona.length; i++){ 
console.log(`los elementos de persona son: ${persona[i]}`);
console.log('los elementos de persona son:                +persona[i]');}
console.log('________________________');
//introduce datos en el array
let alumnos =[];
let data = prompt('introduce un alumno: ');

//funcion  para guardar datos en un arrgleo push
alumnos.push('pepe');
alumnos.push(data);
if(!data){
    alert('no se introdujo ningun dato');
}else{
    alumnos.push(data);
    alert(`ingresamos el alumno' ${data} al arreglo de alumnos`);
}
console.log(alumnos);