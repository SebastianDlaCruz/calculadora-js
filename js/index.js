import Pantalla from "./Pantalla.js";

const doc = document;

//* solectores del DOM //

const  $primeraPantalla = doc.getElementById('pantalla-1'),
$segundaPantalla = doc.getElementById('pantalla-2'),
$borrarTodo = doc.getElementById('borrar-todo'),
$borrar = doc.getElementById('borrar'),
$botonesNumericos = doc.querySelectorAll('#botones button[data-namber]'),
$simbolosMatematicos = doc.querySelectorAll('#botones button[data-simbolos]');

///* OBJETOS ///

const pantalla = new Pantalla($primeraPantalla,$segundaPantalla);

//* EVENTOS ///


$botonesNumericos.forEach((i)=>{
    
    i.addEventListener('click',()=> pantalla.mostrarValores(i.innerHTML));
});

$simbolosMatematicos.forEach((i)=>{

    i.addEventListener('click',(event)=> pantalla.calcular(i.value));
});

 
$borrar.addEventListener('click', () => pantalla.borrar()); 

 $borrarTodo.addEventListener('click', () => pantalla.borrarTodo());

