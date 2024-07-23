// Instance of en Java Script
class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre} sueldo: $${this._sueldo}`
    }

}
// Clase Hija
class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    // Sobreescritura del método obtenerDetalles para la clase Gerente
    obtenerDetalles(){
        return  `Gerente: ${super.obtenerDetalles()} dpto: ${this._departamento} `
    }
}
// Método independiente 
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    // Verificar si un objeto es heredado de otra clase
    if(tipo instanceof Gerente){ // Se requiere poner la clase de menor jerarquia
        console.log('Objeto de tipo Gerente');
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Empleado){
        console.log('Objeto es de tipo Empleado')
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Object){
        console.log('Objeto es de tipo Object');
    }
}

let empleado1 = new Empleado('Juan',350000);
let gerente1 = new Gerente('Juan',500000,'Sistemas');

determinarTipo(empleado1); // Polimorfismo obtenerDetalles clase Empleado
determinarTipo(gerente1); // Polimorfismo obtenerDetalles clase Gerente

