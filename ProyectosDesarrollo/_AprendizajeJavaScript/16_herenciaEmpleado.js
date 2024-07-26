class Empleado extends Persona{
    
    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        // Uso de template string varias lineas con salto para las variables
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}