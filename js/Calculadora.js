export default  class Calculadora{

    constructor(pantallaUno,pantallaDos,mensaje){

        this.pantallaUno = pantallaUno;
        this.pantallaDos = pantallaDos;
        this.mensaje = mensaje;

        this.numeroActual = " ";
        this.numeroAnterior = " ";

        this.tipoDeOperador = null;
        this.calculoArimetico={

            "suma":(numero,numero2) => parseFloat(numero) + parseFloat(numero2),
           "resta":(numero,numero2) =>  parseFloat(numero) - parseFloat(numero2),
            "multiplicacion":(numero,numero2) =>  parseFloat(numero) * parseFloat(numero2),
            "division":(numero,numero2) =>  parseFloat(numero) / parseFloat(numero2),

        }

    }

    imprimirNumeros(){

        this.pantallaUno.textContent = this.numeroAnterior;
        this.pantallaDos.textContent =  this.numeroActual;
        
    }

    digitarNumeros(numero){

        if(!(numero === "." && this.numeroActual.includes("."))){

            if(this.limitarNumeros() === 15){
                
                this.mensaje.classList.add('mensaje-active');
            }
            else{

                this.mensaje.classList.remove('mensaje-active');
                this.numeroActual = this.numeroActual +  numero.toString();

            }
            
            this.imprimirNumeros();

        }

    }


    calcular(digitoArimetico){

        if(digitoArimetico.dataset.arimetica !== "igual"){
            
            this.numeroAnterior = this.numeroActual; 
            this.tipoDeOperador = digitoArimetico.dataset.arimetica;
            this.numeroActual = " ";  
        }else{
    
            this.numeroAnterior = this.calculoArimetico[this.tipoDeOperador](this.numeroAnterior,this.numeroActual);
            this.numeroActual= " ";        
        }
        this.imprimirNumeros()
    }

    borrarNumero(){
        
        this.numeroActual = this.numeroActual.slice(1,-1);
        
        this.imprimirNumeros();
    }

     
    borrarTodo(){

        this.numeroActual = " ";
        this.numeroAnterior =" ";
    
        this.imprimirNumeros();
    }

    limitarNumeros(){
        
        console.log(this.numeroActual.length);
        return   this.numeroActual.length;
    }
};