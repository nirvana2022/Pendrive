DELIMITER //
CREATE TRIGGER actualizacion_nombre
AFTER UPDATE
ON mascota FOR EACH ROW
BEGIN
    /* Actualización de campo adoptante */
    IF NEW.id_masc >= 1 THEN
        UPDATE mascota
        SET nombre_masc = 'PITY'
        WHERE id_masc = NEW.id_masc;
    END IF;
END;
//
DELIMITER ;

