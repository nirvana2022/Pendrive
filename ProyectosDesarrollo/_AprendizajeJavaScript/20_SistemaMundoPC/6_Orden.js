class Orden{

    static contadorOrdenes = 0;

    static get MAX_DISPOSITIVO(){
        return 5;
    }

    constructor(computadoras){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        if(this._computadoras.lenght <= Orden.MAX_DISPOSITIVO){
            this._computadoras.push(computadora)
        }
        else{
            console.log('Ha superado el limite de dispositivos')
        }
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
console.log(orden1.mostrarOrden());
