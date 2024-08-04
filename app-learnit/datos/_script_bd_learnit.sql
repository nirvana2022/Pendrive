DROP DATABASE IF EXISTS db_learnit;
CREATE DATABASE db_learnit;
USE db_learnit;

CREATE TABLE roles (
    id_rol INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    nombre_rol VARCHAR(15) NOT NULL,
    estado_rol VARCHAR(15) NOT NULL,
    descripcion TEXT
) ENGINE=InnoDB;

CREATE TABLE usuarios (
    id_usuario INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    apellido_usuario VARCHAR(30) NOT NULL,
    email_usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol_usuario INT,
    estado_usuario VARCHAR(15) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (rol_usuario) REFERENCES roles(id_rol)
)ENGINE=InnoDB;

CREATE TABLE cursos (
    id_curso INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre_curso VARCHAR(50) NOT NULL,
    especialidad_curso VARCHAR(50) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nivel VARCHAR(15)
) ENGINE=InnoDB;

CREATE TABLE inscripcion (
    id_inscripcion INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    curso_inscrito INT NOT NULL,
    area_curso VARCHAR(50) NOT NULL,
    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (curso_inscrito) REFERENCES cursos(id_curso),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario)
) ENGINE=InnoDB;

INSERT INTO cursos (nombre_curso,especialidad_curso,descripcion,nivel) VALUES('Java Script','Programación','Conceptos de java script','Básico'),
																			 ('Html','Diseño web','Conceptos de HTML','Básico'),
                                                                             ('CSS','Diseño web','Conceptos de CSS','Básico');
