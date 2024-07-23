// Uso de la palabra static en Java Script
class Curso{
    static contadorCursos = 0; // atributo de nuestra clase
    //método contructor de objetos
    constructor(nombre, profesor){
        this._nombre = nombre;
        this._profesor = profesor;
        // post-incremento
        // this._idCurso = Curso.contadorCursos++;
        // pre-incremento
        this.idCurso = ++Curso.contadorCursos;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get profesor(){
        return this._profesor;
    }
    set profesor(profesor){
        this._apellido = profesor;
    }
    cursoProfesor(){
        return this.idCurso +' '+ this._nombre + ' ' + this._profesor;
    }
    // Sobreescribiendo el método de la clase Padre (Object)
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        // el método que se ejecuta depende si es una referencia de tipo padre o hijo
        return this.cursoProfesor();
    }
    static saludar(){
        console.log('saludos desde el método static');
    }
    static saludar2(curso){
        console.log(curso.nombre + ' ' + curso.profesor);
    }
}

class CursoHijo extends Curso{
    constructor(nombre,profesor,nivel){
        super(nombre,profesor);// llamar al constructor de la clase padre Curso
        this._nivel = nivel;
    }
    get nivel(){
        return this._nivel;
    }
    set nivel(nivel){
        this._nivel = nivel;
    }
    //Sobreescritura
    cursoProfesor(){
        return super.cursoProfesor() + ', ' + this._nivel;
    }
}

let cursoObj = new Curso('Programación','Alexader Cuesta');
console.log(cursoObj.toString());

let  cursoHijoobj = new CursoHijo('Idiomas','Juana Strongest','1');
console.log (cursoHijoobj.toString());

console.log(Curso.contadorCursos);

let cursoObj2 = new Curso('Karla', 'Ramirez');
console.log(cursoObj2.toString());
console.log(Curso.contadorCursos);