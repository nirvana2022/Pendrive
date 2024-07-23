// Clase Hija de Dispositivo
class Teclado extends DispositivoEntrada{
    
    static contadorTeclados= 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    
    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
let teclado1 = new Teclado('USB','LOGYTECH');
console.log(teclado1.toString());