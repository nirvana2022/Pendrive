DROP DATABASE IF EXISTS si_vuelos;
CREATE DATABASE si_vuelos;
USE si_vuelos;

CREATE TABLE aeropuerto (
    codigo INT NOT NULL PRIMARY KEY UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    ciudad VARCHAR(30) NOT NULL,
    pais VARCHAR(30) NOT NULL,
    cant_aterrizajes INT NOT NULL,
    cant_despegues INT NOT NULL,
    estado VARCHAR(15) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE avion (
    modelo VARCHAR(30) PRIMARY KEY UNIQUE,
    cap_pasajeros INT NOT NULL
) ENGINE=InnoDB;

CREATE TABLE vuelo (
    id_vuelo INT PRIMARY KEY NOT NULL,
    fecha_vuelo DATETIME NOT NULL,
    asientos_disponibles INT NOT NULL,
    modelo_avion VARCHAR(30) NOT NULL,
    FOREIGN KEY (modelo_avion) REFERENCES avion(modelo)
) ENGINE=InnoDB;

CREATE TABLE programa_vuelo (
    id_programa_vuelo INT PRIMARY KEY NOT NULL,
    linea_aerea VARCHAR(30) NOT NULL,
    dias_disponibles VARCHAR(50) NOT NULL,
    destino_aeropuerto INT NOT NULL,
    origen_aeropuerto INT NOT NULL,
    numero_vuelo INT NOT NULL,
    FOREIGN KEY (destino_aeropuerto) REFERENCES aeropuerto(codigo),
    FOREIGN KEY (origen_aeropuerto) REFERENCES aeropuerto(codigo),
    FOREIGN KEY (numero_vuelo) REFERENCES vuelo(id_vuelo)
) ENGINE=InnoDB;