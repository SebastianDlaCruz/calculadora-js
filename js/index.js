import Calculadora from "./Calculadora.js";

const doc = document;

const cambioDeTemaAzul = (
    $body,
    i,
    $header,
    $sectionPantalla,
    $sectinBotones,
    $dataBotonesColor,
    $rest,
    $del,
    $igual,
    $contenedorBotones
    
    ) =>{

    if(!i.classList.contains("naranja-active")){
        
        $body.classList.remove('body-background-2');
        $header.classList.remove('calculadora-header-2');
        $sectionPantalla.classList.remove('section-pantalla-color-2');
        $sectinBotones.classList.remove('section-botones-2');
        $dataBotonesColor.forEach((i)=> i.classList.remove('numero-2'));
        $rest.classList.remove('res-2');
        $del.classList.remove('del-2');
        $igual.classList.remove('igual-2');
        $contenedorBotones.classList.remove('contenedor-botones-flex__botones-2');
    }

    if(!i.classList.contains("cyan-active")){
        
        $body.classList.remove('body-background-3');
        $header.classList.remove('calculadora-header-3');
        $sectionPantalla.classList.remove('section-pantalla-color-3');
        $sectinBotones.classList.remove('section-botones-3');
        $dataBotonesColor.forEach((i)=> i.classList.remove('numero-3'));
        $rest.classList.remove('res-3');
        $del.classList.remove('del-3');
        $igual.classList.remove('igual-3');
        $contenedorBotones.classList.remove('contenedor-botones-flex__botones-3');
    }

}

const cambioDeTemaWhile = (
    $body,
    i,
    $header,
    $sectionPantalla,
    $sectinBotones,
    $dataBotonesColor,
    $rest,
    $del,
    $igual,
    $contenedorBotones

    ) =>{

    if(!i.classList.contains('cyan-active')){

        $body.classList.remove('body-background-3');
        $header.classList.remove('calculadora-header-3');
        $sectionPantalla.classList.remove('section-pantalla-color-3');
        $sectinBotones.classList.remove('section-botones-3');
        $dataBotonesColor.forEach((i)=> i.classList.remove('numero-3'));
        $rest.classList.remove('res-3');
        $del.classList.remove('del-3');
        $igual.classList.remove('igual-3');
        $contenedorBotones.classList.remove('contenedor-botones-flex__botones-3');
    
    }

    if(i.classList.contains('naranja-active')){

        $body.classList.add('body-background-2');
        $header.classList.add('calculadora-header-2');
        $sectionPantalla.classList.add('section-pantalla-color-2');
        $sectinBotones.classList.add('section-botones-2');
        $dataBotonesColor.forEach((i)=> i.classList.add('numero-2'));
        $rest.classList.add('res-2');
        $del.classList.add('del-2');
        $igual.classList.add('igual-2');
        $contenedorBotones.classList.add('contenedor-botones-flex__botones-2');
    }
};

const cambioDeTemaPurpura = (
    $body,
    i,
    $header,
    $sectionPantalla,
    $sectinBotones,
    $dataBotonesColor,
    $rest,
    $del,
    $igual,
    $contenedorBotones
    
    ) =>{
    
    $body.classList.add('body-background-3');
    $header.classList.add('calculadora-header-3');
    $sectionPantalla.classList.add('section-pantalla-color-3');
    $sectinBotones.classList.add('section-botones-3');
    $dataBotonesColor.forEach((i)=> i.classList.add('numero-3'));
    $rest.classList.add('res-3');
    $del.classList.add('del-3');
    $igual.classList.add('igual-3');
    $contenedorBotones.classList.add('contenedor-botones-flex__botones-3');
};

const activarBotones = ( 
    dtabnt,
    body,
    header,
    sectionPantalla,
    sectionBotones,
    datanbotonesColor,
    rest,
    del,
    igual,
    contenedorBotones

    ) => {

    const $dataBonotes = doc.querySelectorAll(dtabnt),
    $body = doc.getElementById(body),
    $header = doc.getElementById(header),
    $sectionPantalla = doc.getElementById(sectionPantalla),
    $sectinBotones = doc.getElementById(sectionBotones),
    $dataBotonesColor = doc.querySelectorAll(datanbotonesColor),
    $rest = doc.getElementById(rest),
    $del = doc.getElementById(del),
    $igual = doc.getElementById(igual),
    $contenedorBotones = doc.getElementById(contenedorBotones);

    $dataBonotes.forEach((i)=>{

        i.addEventListener('click',(event)=>{
            
            if(event.target.matches(`#rojo`)){

                i.classList.add('rojo-active');
                cambioDeTemaAzul(
                    $body,
                    i,
                    $header,
                    $sectionPantalla,
                    $sectinBotones,
                    $dataBotonesColor,
                    $rest,
                    $del,
                    $igual,
                    $contenedorBotones   
                    );
                doc.querySelector('#naranja').classList.remove('naranja-active');
                doc.querySelector('#cyan').classList.remove('cyan-active');
            }
            
            if(event.target.matches(`#naranja`)){
                
                i.classList.add('naranja-active');

                cambioDeTemaWhile(
                    $body,
                    i,
                    $header,
                    $sectionPantalla,
                    $sectinBotones,
                    $dataBotonesColor,
                    $rest,
                    $del,
                    $igual,
                    $contenedorBotones
                    );
                doc.querySelector('#rojo').classList.remove('rojo-active');
                doc.querySelector('#cyan').classList.remove('cyan-active');
            }
            
            if(event.target.matches(`#cyan`)){
                
                i.classList.add('cyan-active');
                cambioDeTemaPurpura(
                    $body,
                    i,
                    $header,
                    $sectionPantalla,
                    $sectinBotones,
                    $dataBotonesColor,
                    $rest,
                    $del,
                    $igual,
                    $contenedorBotones
                    );
                doc.querySelector('#naranja').classList.remove('naranja-active');
                doc.querySelector('#rojo').classList.remove('rojo-active');
            }


        });
    });
}


const funcionalidadCalculadora = (dataNumero,dataAritmetica,pantallaUno,pantallaDos) =>{

    const $dataNumero = doc.querySelectorAll(dataNumero),
    $dataAritmetica = doc.querySelectorAll(dataAritmetica),
    $pantallaUno = doc.getElementById(pantallaUno),
    $pantallaDos = doc.getElementById(pantallaDos);

    const $Calculadora = new Calculadora ($pantallaUno,$pantallaDos);

    $dataNumero.forEach((i)=> {

        i.addEventListener('click',()=> $Calculadora.digitarNumeros(i.innerHTML));
    });
    
    $Calculadora.imprimirNumeros()
}


doc.addEventListener('DOMContentLoaded',()=>{

    activarBotones(
        
        '[data-botones]',
        'body',
        'header',
        'section-pantalla',
        'section-botones',
        '[data-botonesColor]',
        'rest',
        'del',
        'igual',
        'contenedor-botones'
        );

    funcionalidadCalculadora('[data-numero]','[data-arimetica]','pantalla-uno','pantalla-dos');
});