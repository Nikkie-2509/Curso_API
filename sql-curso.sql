create database escola;

use escola;

create table professor(
	id int auto_increment primary key,
	nome varchar(200),
	especialidade varchar(200)
);

create table curso(
	id int auto_increment primary key,
    nome varchar(200),
    descricao varchar(200), 
    professor_id int not null,
    foreign key (professor_id) references professor(id)
);