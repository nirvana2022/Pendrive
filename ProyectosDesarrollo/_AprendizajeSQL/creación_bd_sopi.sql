drop database sopi;
create database sopi;
use sopi;
create table usuarios(
	id_usuario int not null primary key unique auto_increment,
	usuario varchar(12) not null unique,
    contraseña varchar (12) not null
);
use sopi;
create table roles(
	id_rol int not null primary key unique auto_increment,
    nivel_rol varchar(20) not null unique
);
insert into usuarios(usuario,contraseña) values ('user','pass');
select * from usuarios;
update roles
	set nivel_rol = 'usuario_estandar'
    where id_rol <= 1;
insert into roles(nivel_rol) values ('usuario_estandar'),('usuario_consulta'),('usuario_editor'),('administrador');
select * from roles order by id_rol asc;