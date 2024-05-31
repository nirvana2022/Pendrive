create database if not exists veterinaria;

use veterinaria;

create table if not exists tipo_vacuna(
id_tipo_vacuna int auto_increment primary key,
des_tipo_vacuna varchar(30) not null);

create table if not exists especialidad(
id_especial varchar(50) primary key,
nom_especial varchar(50) not null);

create table if not exists Profesional(
id_prof varchar(20) Primary key,
nombre_prof varchar(50) not null,
apellido_prof varchar(50) not null,
correo1_prof varchar(100) not null,
correo2_prof varchar(100),
telefono1_prof varchar(20) not null,
telefono2_prof varchar(20));

create table if not exists Adoptante(
id_adop varchar(20) Primary key,
nombre_adop varchar(50) not null,
apellido_adop varchar(50) not null,
direccion_adop varchar(100) not null,
correo_adop varchar(100) not null,
telefono1_adop varchar(20) not null,
telefono2_adop varchar(20));

create table if not exists Vacuna(
id_vacuna int auto_increment primary key,
nombre_vac varchar(30) not null,
fecha_lote_vac date not null,
fecha_ven_vac date not null,
tipo_vac int not null,
constraint vac_t_vac foreign key(tipo_vac) references tipo_vacuna(id_tipo_vacuna));

create table if not exists Mascota(
id_masc int auto_increment primary key,
nombre_masc varchar(50) not null,
especie_masc varchar(50) not null,
raza_masc varchar(50) not null,
genero_masc char(1) not null,
fecha_nac_masc date not null,
adoptante varchar(20) not null,
constraint mac_adop foreign key(adoptante) references adoptante(id_adop));

create table if not exists dosis(
id_dosis int auto_increment primary key,
fecha_aplic_dosis datetime not null,
vacuna int not null,
mascota int not null,
constraint vac_dosis foreign key(vacuna) references vacuna(id_vacuna),
constraint masc_dosis foreign key(mascota) references mascota(id_masc));

create table if not exists Cita(
id_cita int auto_increment primary key,
fecha_cita datetime not null,
profesional varchar(20) not null,
mascota int not null,
especialidad varchar(50) not null,
constraint mas_cita foreign key (mascota) references mascota(id_masc),
constraint prof_cita foreign key (profesional) references profesional(id_prof),
constraint espec_cita foreign key (especialidad) references especialidad(id_especial));