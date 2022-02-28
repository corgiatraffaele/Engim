-- drop database if exists esameEngim;
-- create database esameEngim;
-- use esameEngim;

create table art(
    id int auto_increment primary key,
    codice varchar(20) not null,
    descrizione text(500), 
    peso float not null)
    engine=innodb;

create table ord(
    id int auto_increment primary key,
    numero int not null,
    data date)
    engine=innodb; 
    
create table tc(
  id int auto_increment primary key,
  nome_corriere varchar(20) not null,
  nome_tariffa varchar(20) not null,
  peso_massimo float not null,
  costo float not null)
  engine=innodb;

create table voce(
  id_ordine int not null,
  id_articolo int not null,
  qta_articolo int not null,
  primary key(id_ordine,id_articolo),
  foreign key (id_ordine) references ord(id)
  on delete no action on update cascade,
  foreign key (id_articolo) references art(id)
  on delete no action on update cascade)
  engine=innodb;

  
  
