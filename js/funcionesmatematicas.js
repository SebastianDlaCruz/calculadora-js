const doc = document;

export  function calcular(btns,contBtn){

    const $contenerBtn = doc.getElementById(contBtn);
    const $botones = doc.querySelectorAll(btns);
    
    $botones.forEach((i)=>{

        i.addEventListener('click',(event)=>{

            console.log(i);

        });

    });

}