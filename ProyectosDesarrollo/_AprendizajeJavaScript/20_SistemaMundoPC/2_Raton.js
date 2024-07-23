// Clase hija de Dispositivo
class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        // Iniciamos los atributos Heredados tipoEntrada y marca de la Clase DispositivoEntrada
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton('USB','HP');
console.log(raton1);
