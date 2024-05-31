CREATE DATABASE base_app;
USE base_app;
CREATE TABLE usuarios(
	id_user int primary key not null,
    name_user varchar (25)
);
INSERT INTO usuarios VALUES
(0,'prueba1'),
(1111,'prueba2'),
(2222,'prueba3'),
(3333,'prueba4'), 
(5165,'user1'),
(3752,'user2'),
(5642,'user3'),
(7684,'user3')
;
USE base_app;
SELECT * FROM usuarios;
INSERT INTO usuarios VALUES 
(5165,'user1'),
(3752,'user2'),
(5642,'user3')
;
