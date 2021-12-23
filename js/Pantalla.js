export default class Pantalla{

    constructor(primeraPantalla,segundaPantalla){

        this.primeraPantalla = primeraPantalla;
        this.segundaPantalla = segundaPantalla;

        this.numeroActual   = " ";
        this.numeroAnterior = " ";
        this.tipoDeOperacion  = null;

        this.calculadora = {

            sumar: (num1 , num2) => num1 + num2,
            restar: (num1 , num2) => num1 - num2 ,
            multiplicar: (num1 , num2) => num1 * num2 ,
            dividir: (num1 , num2) => num1 / num2 ,
        

        };
    }


    
    imprimirValores(){

        this.primeraPantalla.textContent = this.numeroAnterior;
        this.segundaPantalla.textContent = this.numeroActual;
     
    }


    mostrarValores(numeros){

        if(!(numeros === "." && this.numeroActual.includes('.'))){

            this.numeroActual  += numeros.toString();

            this.imprimirValores();
         
        } 

    }

    calcular(value){

        let numeroAnterior = parseFloat(this.numeroAnterior),
        numeroActual = parseFloat(this.numeroActual);        
        
        if(value !== "igual" ){

            this.tipoDeOperador = value;

            if(!(isNaN(numeroAnterior) && isNaN(numeroActual))){

                this.numeroAnterior = this.numeroActual;

                numeroAnterior = parseFloat(this.numeroAnterior);
                
                this.numeroActual = " ";

                this.imprimirValores();
            }

            
        }
        else {
            
            this.numeroAnterior  = this.calculadora[this.tipoDeOperador](numeroAnterior,numeroActual);

            this.numeroActual = " ";

            this.imprimirValores();
            

        }

    }

    borrar(){

        this.numeroActual =  this.numeroActual.slice(1);

        this.imprimirValores();

    }

    borrarTodo(){

        this.numeroActual = " ";
        this.numeroAnterior =" ";

        this.imprimirValores();
    }
    
};