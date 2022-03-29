export default  class Calculadora{

    constructor(pantallaUno,pantallaDos){

        this.pantallaUno = pantallaUno;
        this.pantallaDos = pantallaDos;

        this.numeroActual = " ";
        this.numeroAnterior = " ";

    }

    imprimirNumeros(){

        this.pantallaUno.textContent = this.numeroAnterior;
        this.pantallaDos.textContent =  this.numeroActual;
        
    }

    digitarNumeros(numero){

        if(!(numero === "." && this.numeroActual.includes("."))){
            
            this.numeroActual = this.numeroActual +  numero.toString();
            this.imprimirNumeros();
            
        }


    }
};