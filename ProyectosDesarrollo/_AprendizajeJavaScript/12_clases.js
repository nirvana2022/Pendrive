// Clases->Plantillas en JavaScript -> Objeto es una instancia de una clase
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
// Instanciamos un objeto persona1 de la clase Persona
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);
// Instanciamos un objeto persona2 de la clase Persona
let persona2 = new Persona('Carlos','Lara');
console.log(persona2);

// Get para leer atributos de clases
class Personaa {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

let personaa = new Personaa('Juan', 'Perez');
console.log(personaa);
personaa.nombre = 'Juan Carlos';
personaa.apellido = 'Jerez';
console.log(personaa);

// No se pueden crear objetos antes de declarar la clase
let personab = new Personaa('Karla', 'Juarez');
console.log(personab);

// Herencia en Java Script -> Get & Set
class Empleado extends Personaa{
    constructor(nombre,apellido,departamento){
        super(nombre, apellido);//LLamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado('Juan', 'Perez', 'Tecnología');
console.log(empleado1);
console.log(empleado1.nombre);

// Herencia de métodos en Java Script
class CursoPadre {

    // Definir atrinutos estaticos
    static contadorCursos = 0;

    constructor(nombre, especialidad){
        this._nombre = nombre;
        this._especialidad = especialidad;
    }
    get nombre(){
        return this._nombre; 
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get especialidad(){
        return this._especialidad
    }
    set especialidad(especialidad){
        this._especialidad = especialidad;
    }

    // No se hace necesario poner la palabra function para crear una función dentro de una clase
    fichaCurso(){
        return this._nombre +' '+ this._especialidad;
    }
    // Sobresrcibiendo el método toString de la clase Padre Object 
    toString(){
        //Aplicando concepto de polimorfismo (Multiples formas en tiempo de ejecución)
        return this.fichaCurso();
    }
    static saludar(){ // (static)el método se asocia con la clase, más no con los objetos que se creen de esta clase
        console.log('Saludos desde el método static')
    } 
    static saludar2(curso){
        console.log(curso.nombre + ' ' + curso.especialidad);
    }
}

class CursoHijo extends CursoPadre{
    constructor(nombre,especialidad,profesor){
        super(nombre,especialidad);
        this._profesor = profesor;
    }
    get profesor(){
        return this._profesor
    }
    set profesor(profesor){
        this._profesor = profesor;
    }
    // Sobreescritura en Java Script -> modificar el comportamiento de un método heredado de una clase padre
    // Sobreescritura
    fichaCurso(){
        //return this._nombre +' '+ this._especialidad +' '+this._profesor;
        return super.fichaCurso() + ' ' + this._profesor
    }
}

let cursoPadreObj = new CursoPadre('Java Script','Programación');
console.log(cursoPadreObj);
let cursoHijoObj = new CursoHijo('React','Framework de programación','Juan Perez');
console.log(cursoHijoObj);
console.log(cursoHijoObj.fichaCurso());
console.log(cursoHijoObj.toString());


// Clase Object en JavaScript y polimorfismo 
console.log(cursoHijoObj.toString());

// cursoPadreObj.saludar();  no se puede llamar un objeto static desde un objeto
CursoPadre.saludar();
CursoPadre.saludar2(cursoPadreObj);
CursoHijo.saludar();
CursoHijo.saludar2(cursoHijoObj);

// Atributos estáticos en Java Script
console.log(cursoPadreObj.contadorCursos);
console.log(CursoPadre.contadorCursos);
console.log(cursoHijoObj.contadorCursos)
console.log(CursoHijo.contadorCursos);