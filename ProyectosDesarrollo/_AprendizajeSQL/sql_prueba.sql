CREATE DATABASE bd_universidad;
use bd_universidad;
CREATE TABLE Estudiantes (
    Id_Estudiante INT PRIMARY KEY,
    Nombre_Est VARCHAR(30)
);
CREATE TABLE Materias (
     Id_Materia INT PRIMARY KEY,
     Nombre_Mat VARCHAR(100),
     Creditos INT(1)
);
CREATE TABLE Profesores (
     Id_Profesor INT PRIMARY KEY,
     Nombre_Prof VARCHAR(100)
);

CREATE TABLE Registro (
     Id_Registro INT PRIMARY KEY,
     Id_Estudiante INT,
     Materia_impartida INT,
     FOREIGN KEY (Id_Estudiante) REFERENCES Estudiantes(Id_Estudiante),
     FOREIGN KEY (Materia_impartida) REFERENCES Materias(Id_Materia)
);