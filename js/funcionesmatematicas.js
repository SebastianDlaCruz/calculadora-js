const doc = document;

export function calcular(btnNumeros,simbolo){

    const $numeros = doc.querySelector(`${btnNumeros} `);

    doc.addEventListener('click',(event)=>{

        if(event.target.matches('.boton-number')){

            console.log($numeros);

        }

    });

    


}