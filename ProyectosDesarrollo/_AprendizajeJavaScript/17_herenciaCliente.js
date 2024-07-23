class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    
    toString(){
        // Uso de template string varias lineas con salto para las variables
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}