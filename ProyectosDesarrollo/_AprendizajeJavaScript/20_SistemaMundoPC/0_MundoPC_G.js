// Clase madre de Ratón y de Teclado
class DispositivoEntrada{
    
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

}
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
console.log(raton1.toString());
let raton2 = new Raton('Bluetooh','DELL');
console.log(raton2.toString());

// Modificar atributo de un objeto
raton2.marca = 'LENOVO';
console.log(raton2.toString());

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

let teclado2 = new Teclado('Bluetooh','GENIUS');
console.log(teclado2.toString());

// Clase independiente Monitor:
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


// Relación de agregación entre clase Computadora
class Computadora{

    static contadorComputadoras=0;
    
    constructor(nombre,monitor,raton,teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

let computadora1 = new Computadora('HP',monitor1,raton1,teclado1);
console.log(computadora1.toString());
let computadora2 = new Computadora('DELL', monitor2,raton2,teclado2);
console.log(computadora2.toString());
// Sintaxis de template string
console.log(`${computadora1}`);
console.log(`${computadora2}`);

let computadora3 = new Computadora('Armada',monitor2,teclado1,raton2);
console.log(computadora3.toString());

// Clase Orden

class Orden{

    static contadorOrdenes = 0;
    
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
            this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this.idOrden}, Computadoras:, ${computadorasOrden}`);

    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();
