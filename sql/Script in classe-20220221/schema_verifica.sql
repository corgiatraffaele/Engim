-- LIBRI(CodiceLibro, Titolo, NumeroDiPagine, Genere, AnnoDiPubblicazione)
-- AUTORI(CodiceAutore, Nome, Cognome, AnnoDiNascita)
-- LISTINO_PREZZI(CodiceLibro, CodiceAutore, Prezzo)

create table libri(
  codl int auto_increment primary key,
  titolo varchar(50) not null,
  npag int not null,
  genere varchar(50) not null,
  annop int)
  engine=innodb;

create table autori(
  coda int auto_increment primary key,
  nome varchar(20) not null,
  cognome varchar(20) not null,
  annon int) engine=innodb;
  
create table listino_prezzi(
  codl int not null,
  coda int not null,
  prezzo int not null,
  primary key (codl, coda),
  foreign key (codl) references libri(codl),
  foreign key (coda) references autori(coda))
  engine=innodb;

insert into libri (titolo,npag,genere,annop) values
  ("Il video di Sara", 500, "Thriller", 2022),
  ("Libro 2", 300, "Horror", 2009),
  ("Libro 3", 239, "Fantasy", 1998);
  
insert into autori(nome, cognome, annon) values
  ("mario", "rossi", 1970),
  ("sara", "verdi", 1890),
  ("mara", "bianchi", 2000);

insert into listino_prezzi values
 (1, 1, 25),
 (1, 2, 25),
 (2, 3, 50),
 (3, 2, 90),
 (2, 2, 30);
