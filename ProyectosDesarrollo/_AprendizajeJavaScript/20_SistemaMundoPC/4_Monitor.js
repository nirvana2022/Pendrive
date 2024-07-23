class Monitor{

    static contadorMonitores = 0;

    constructor(marca,tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this.marca = marca;
    }

    get tamanio(){
        return this.tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor} marca: ${this._marca} tamaño: ${this._tamanio}]`;
    }
}

let monitor1 = new Monitor('SAMSUNG',23)
console.log(monitor1.toString());
let monitor2 = new Monitor('DELL',27);
console.log(monitor2.toString());