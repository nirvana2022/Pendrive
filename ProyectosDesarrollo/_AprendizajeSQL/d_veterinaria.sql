use veterinaria;

insert into adoptante(id_adop,nombre_adop,apellido_adop,direccion_adop,correo_adop,telefono1_adop,telefono2_adop)
values
("56YK45890TU","ROBIN ALEXANDER","MICHELI","Calle 63 No. 14-90","robin.micheli@mail.com","4567345",""),
("123456780","JUAN CAMILO","GOMEZ FUENTES","Calle 45 No. 23-89","juan.gfuentes@mail.com","4208900","321890345"),
("359880978","EDGAR MAURICIO","GARDIAZABAL RINCON","Avenida Caracas No. 53-23","edgar.gar@mail.com","587974","3215678903"),
("RE988934FYH","GABRIELA MARIA","SANCHEZ DIAZ","Park Way No. 56-89","gabriela@mail.com","3235789603","3246789024"),
("56789345","KIKA ANTONIA","TORRES DEL CASTILLO","Sabana Larga No. 23-90","kika@mail.com","3456789","2096874"),
("WRJIOO0034","LUCENZIO ANDREA","BOCCIELI PEREGRIL","Avenida Las Palmas No. 45-67","andrea.boccieli@mail.com","3214567894","3210808990");

insert into especialidad(id_especial,nom_especial)
values
("cir_est","cirugia de esterilizacion"),
("oncologia","veterinario oncologico"),
("fisioterapia","veterinario fisioterapeura"),
("odontologia","veterinario odontologico"),
("veterinaria","veterinario general veterinario"),
("imagenologia","veterinario radiologo"),
("psicologo","veterinario psicologo");
 
insert into profesional(id_prof,nombre_prof,apellido_prof,correo1_prof,correo2_prof,telefono1_prof,telefono2_prof)
values
("34567890","SEBASTIAN ALEJANDRO","RODRIGUEZ TORRES","sebastina@veterinaria.com","","3245678345","3789034568"),
("56789034","CRISTINA MARCELA","GOMEZ BOLAÑOS","cristina@veterinaria.com","cris@correo.com","4567898","3214567890"),
("RARIO3409","ARMANDO TOBIAS","PAREDES Y CASAS","tobias@veterinaria.com","tobi@correo.com","3456789045",""),
("89034557","HELVERT CAMILO","LADRON DE TORRES","helvert@veterinaria.com","ladron@correo.com","5678904","3459085556"),
("23490TUOO00","SHARAY ELIF","ANCHELOT FLORES","elif@veterinaria.com","","5678943",""),
("56789450","YUYEIMY USNAVY","BOND YOURT","yuyeimy@veterinaria.com","usnavy@correo.com","4567345","");

insert into tipo_vacuna
(des_tipo_vacuna)
values ("suero"),("oral"),("intravenosa"),("nasal"),("frote"),("sonda");

insert into mascota(nombre_masc, especie_masc, raza_masc, genero_masc,fecha_nac_masc, adoptante)
values
("TOBI","CANINO","LABRADOR","M",'2015/09/15',"56789345"),
("MARGA","FELINO","PERSA","H",'2017/01/05',"56YK45890TU"),
("PELUSA","FELINO","ANGORA","M",'2016/05/23',"123456780"),
("LUNA","REPTIL","COBRA","H",'2013/11/30',"WRJIOO0034"),
("BENGI","ROEDOR","HAMSTER","M",'2016/12/02',"56789345"),
("KIARA","EQUINO","YEGUA","H",'2013/07/24',"WRJIOO0034"),
("SASHA","CANINO","GRAN DANES","H",'2015/2/1',"123456780"),
("PHONEX","AVE","AGUILA","M",'2016/3/8',"56YK45890TU");

insert into cita(fecha_cita, profesional, mascota,especialidad)
values
('2017/09/15 14:00',"56789034",5,"imagenologia"),
('2017/09/16 07:00',"RARIO3409",4,"veterinaria"),
('2017/09/18 09:00',"23490TUOO00",6,"odontologia"),
('2017/09/18 11:00',"89034557",8,"fisioterapia"),
('2017/09/19 13:00',"56789034",7,"psicologo"),
('2017/09/20 08:00',"23490TUOO00",3,"cir_est"),
('2017/09/21 08:00',"23490TUOO00",1,"cir_est"),
('2017/09/29 09:00',"56789034",1,"psicologo"),
('2017/09/24 09:00',"56789034",3,"psicologo");

insert into vacuna
(nombre_vac,fecha_lote_vac,fecha_ven_vac,tipo_vac)
values
("antirrabica",'2017/06/23','2022/06/23',3),
("moquillo",'2016/09/21','2026/09/21',4),
("parvovirus",'2017/01/20','2022/01/20',3),
("coronavirus",'2015/04/3','2015/04/3',6),
("hepatitis infecciosa canina",'2017/01/21','2015/01/21',2),
("influenza canina",'2017/06/8','2027/06/8',4),
("leptospira",'2017/02/12','2027/02/12',5);


insert into dosis(fecha_aplic_dosis, vacuna, mascota)
values('2017/09/19',5,1),
('2015/12/10',1,3),
('2016/03/09',2,5),
('2017/05/06',3,6),
('2017/02/06',2,8),
('2016/09/09',4,7),
('2011/11/29',2,2),
('2012/06/20',1,5);


