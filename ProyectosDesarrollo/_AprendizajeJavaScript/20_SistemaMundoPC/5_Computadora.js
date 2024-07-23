// Relación de agregación entre clase Computadora
class Computadora{

    static contadorComputadoras;
    
    constructor(nombre,monitor,raton,teclado){
        this._IdComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    get idComputadora(){
        return this._IdComputadora;
    }

    set idComputadora(idComputadora){
        this._IdComputadora = idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        this._monitor = monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this.teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._IdComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}
