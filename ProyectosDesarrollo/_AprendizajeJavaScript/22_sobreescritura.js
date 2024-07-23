// Sobreescritura en java script
// Clase Padre
class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this.nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
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

let empleado1 = new Empleado('Juan',350000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Juan',500000,'Sistemas');
console.log(gerente1.obtenerDetalles());