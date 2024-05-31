DELIMITER //
CREATE PROCEDURE InsertarAdoptante(
    IN id_adop INT,
    IN nombre_adop VARCHAR(50),
    IN apellido_adop VARCHAR(50),
    IN direccion_adop VARCHAR(100),
    IN correo_adop VARCHAR(100),
    IN telefono1_adop VARCHAR(20),
    IN telefono2_adop VARCHAR(20)
)
BEGIN
    INSERT INTO Adoptante (id_adop, nombre_adop, apellido_adop, direccion_adop, correo_adop, telefono1_adop, telefono2_adop)
    VALUES (id_adop, nombre_adop, apellido_adop, direccion_adop, correo_adop, telefono1_adop, telefono2_adop);
END;
//
DELIMITER ;

CALL InsertarAdoptante(5, 'juana', 'de arco', 'casa 1 lote 6', 'juanadea@gmail.com', '0394589758', '0658597463');




