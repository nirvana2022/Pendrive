// Objetos en JS
let x = 10;
console.log(x.lenghth);

// Creción del objeto "persona" con las propiedades
let persona = {
    nombre : "didier",
    apellido : "villamil",
    email : "didier.villamil@gmail.com",
    edad : 32
}
console.log(persona.email);

let curso = {
    // Atributos curso
    id_curso : 1,
    nombre_curso : "programación orientada a objetos",
    duracion_curso : "21-06-2024"
};
let roles = {
    // Atributos roles
    id_rol : 1,
    nombre_rol : "estudiante"
};

let inscripcion = {
    // Atributos inscripcion
    id_inscripcion : 1,
    id_curso : 1
};

console.log(curso, roles, inscripcion);

// Métodos a objetos
let persona2 = {
    // Declaración de atributos del objeto persona 2
    nombre : "juan",
    apellido : "perez",
    email : "juan.perez@gmail.com",
    edad : 23,
    // método presentarse
    presentarse : function(){
        return this.nombre + " " + this.apellido
    },
    // método saludar
    saludar : function(){
        return "Bienvenido" +" "+ this.nombre
    }
}
console.log(persona2.presentarse());
console.log(persona2.saludar());

// Forma 2 de crear un objeto en JS
let persona3 = new Object();
persona3.nombre = "Lina"
persona3.apellido = "Tejeiro"
console.log(persona3)

let tableroAjedrez = new Object();
tableroAjedrez.lineaBlancas = [0,1,0,1,0,1,0,1];
tableroAjedrez.lineaNegras  = [1,0,1,0,1,0,1,0];
console.log(tableroAjedrez.lineaBlancas);
console.log(tableroAjedrez.lineaNegras); 
console.log(tableroAjedrez.lineaBlancas);
console.log(tableroAjedrez.lineaNegras); 
console.log(tableroAjedrez.lineaBlancas);
console.log(tableroAjedrez.lineaNegras); 
console.log(tableroAjedrez.lineaBlancas);
console.log(tableroAjedrez.lineaNegras); 

// Otra forma de acceder a propiedades de los objetos en JS
console.log(tableroAjedrez['lineaBlancas'])

// Recorrer propiedades de un objeto

//Declaramos el objeto student
let student ={
    nombre : "juan",
    apellido : "grajales"
}
// Creamos el ciclo que realizará el recorrido de los atributos de nuestro objeto
for (nombrePropiedad in student){
    console.log(nombrePropiedad);
    console.log(student[nombrePropiedad])
}

// Agregar propiedades de un Objeto
student.tel = "7448888";
console.log(student);

// Eliminar propiedades de un objeto
delete student.tel;
console.log(student);

// Imprimir un objeto de distintas formas
console.log(student.nombre+','+student.apellido);

// for in
for (nombrePropiedad in student){
    console.log(nombrePropiedad);
    console.log(student[nombrePropiedad]);
}
// asociar un objeto a un array
let studentArray=Object.values(student);
console.log(studentArray);
// asociar un objeto a un objeto con estructura json
let studentString= JSON.stringify(student);
console.log(studentString)
console.log(typeof(studentString))

// Método Get
let student2 = {
    nombre: "Juan",
    apellido: "Perez",


    
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(student2.nombreCompleto);

// Método Set
let student3 ={
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +' '+ this.apellido;
    }
}

console.log(student3.lang);
student3.lang= 'en';
console.log(student3.lang);

// Constructor de objetos, función especial
// Función constructor de objetos de tipo Student
function Student(nombre, apellido, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email
}

let estudiante1 = new Student('Juan','Perez','jperez@mail.com');
console.log(estudiante1); 
let estudiante2 = new Student('Laura','Quintero','lquintero@mail.com')
console.log(estudiante2);

estudiante1.nombre = 'Carlos';
console.log(estudiante1);

//Agregar métodos a un método constructor de objetos
function Student(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido
    };
}
let estudiante3 = new Student('Juana', 'Sorin', 'jusorin@mail.com');
console.log(estudiante3.nombreCompleto());
let estudiante4 = new Student('Sofia', 'Carabali', 'sofcara@mail.com');
console.log(estudiante4.nombreCompleto());

// Distintas formas de crear objetos en Java Script
let miObjeto = new Object(); // Opción formal
let miObjeto2 = {}; // Opción mas simple
let miCadena1 = new String('Hola');   // Cosntructor string
let miCadena2 = 'Hola';  // Forma recomendada string
let miNumero = new Number(1); // Objeto número
let miNumero2 = 1; // Forma simplificada recomendada
let miBoolean = new Boolean(); // Objeto boleano
let miBoolean2 = false; // Forma recomendada boleano
let miArreglo1 = new Array; // Objeto arreglo
let miArreglo2 = []; // Objeto arreglo simplificado

let miFuncion  = new Function();
let miFuncion2 = function(){};

// Uso de prototype para modificar atributos y métodos asociados a un objeto
function Curso(nombre, especialidad, profesor){
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.profesor = profesor;
    this.fichaCurso = function(){
        return this.nombre + ' ' + this.especialidad
    }
}
Curso.prototype.area = 'Tecnología'
let curso1 = new Curso ('JavaScript', 'Desarrollo','Profesor 1');
curso1.area='1';
console.log(curso1.area);
let curso2 = new Curso ('Html','Desarrollo','Profesor 2');
curso2.area='2'
console.log(curso2.area)

// Método call parra llamar a un método dentro de un objeto desde otro objeto
let personaa = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre +' '+this.apellido
    }
}
let personab={
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de call para llamar el método nombre completo de personaa
// Llamado normal del método
console.log(personaa.nombreCompleto());
// Llamado con call del m'etodo nombreCompelto de persoaa en personab
console.log(personaa.nombreCompleto.call(personab));

// Paso de argumentos a Call
let personaaa = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,tel){
        return titulo +': '+ this.nombre + ' ' + this.apellido + ', ' + tel
    }
}
console.log(personaaa.nombreCompleto('Ing','7445688'));
console.log(personaaa.nombreCompleto.call(personab, 'Ing','7445846'));

// Método apply
let personaaaa ={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,tel){
        return titulo +': '+ this.nombre +' '+ this.apellido +', '+ tel
    }
}
console.log(personaaaa.nombreCompleto('Lic','7445869'));
let arreglopersonaaaa = ['Ing','7445869']
console.log(personaaaa.nombreCompleto.apply(personab,arreglopersonaaaa));
console.log(personaaaa.nombreCompleto.apply(personab,['lic','7448596']));

