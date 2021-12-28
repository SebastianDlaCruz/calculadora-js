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

//* EVENTOS DE CALCULADORA ///


$botonesNumericos.forEach((i)=>{
    
    i.addEventListener('click',()=> pantalla.mostrarValores(i.innerHTML));
});

$simbolosMatematicos.forEach((i)=>{

    i.addEventListener('click',(event)=> pantalla.calcular(i.value));
});

 
$borrar.addEventListener('click', () => pantalla.borrar()); 

 $borrarTodo.addEventListener('click', () => pantalla.borrarTodo());

//* EVENTOS DE CAMBIO DE COLOR // 

const $botones = doc.querySelectorAll('[data-botons]'),
$container = doc.getElementById('container'),
$desktop = doc.getElementById('desktop'),
$igual = doc.getElementById('igual'),
$dataText = doc.querySelectorAll('[data-texts]'),
$dataContainers = doc.querySelectorAll('[data-containers]'),
$dataColors = doc.querySelectorAll('[data-colors="btn"]'),
$body = doc.getElementById('style');

$botones.forEach((i)=>{

    i.addEventListener('click', (event)=>{

        if(event.target.matches('#color-2')){

            $body.classList.add('style-2');
            $container.classList.add('style-2');
            $dataText.forEach(i => i.classList.add('texts-2'));
            $desktop.classList.add('desktop-2');
            $dataContainers.forEach(i => i.classList.add('containers-2'));
            $dataColors.forEach(i => i.classList.add('botones-2'));
            $igual.classList.add('igual-2');
        } 
        
        else if(event.target.matches('#color-3')){

            $body.classList.add('style-3');
            /* $container.classList.replace('style-2');
            $dataText.forEach(i => i.classList.replace('texts-2'));
            $desktop.classList.replace('desktop-2');
            $dataContainers.forEach(i => i.classList.replace('containers-2'));
            $dataColors.forEach(i => i.classList.replace('botones-2'));
            $igual.classList.replace('igual-2'); */

        }    
    


        
    
    });

});