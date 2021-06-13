create database if not exists db_crud;

use db_crud;

create table tb_empleados(
	id_empleado int not null auto_increment primary key,
    nombre varchar(50),
    curso varchar(30)
);

insert into tb_empleados (nombre, curso)values ('Jorge Massón', 'Curso01');