
/*ESERCIZIO
scrivere  un programma prima con diagramma di flusso e poi in pseudocodice che, sulla base dei dati e strumenti a disposizione
calcoli il costo di ogni dipendente per l'anno corrente e il totale dei costi per categoria di dipendente per l'anno corrente.

ogni dipendente ha:
nome
cognome
id (numerico)
costo orario
categoria ('I' / 'D' / 'T', cioè impiegato amministrativo, docente, tecnico di laboratorio) 


esiste un archivio delle presenze dell'anno corrente:
anno
numGiorno (int, numero del giorno dell'anno )
idDipendente (id, lo stesso indicato sopra)
ore lavorate 
*/






arr<JSON> dipendenti = [
{"nome": "F", "cognome": "D", "id": 0, "costoOrario": 100, "categoria": "I" }, 
{"nome": "G", "cognome": "F", "id": 1, "costoOrario": 200, "categoria": "I" }, 
{"nome": "H", "cognome": "D", "id": 2, "costoOrario": 100, "categoria": "D" }, 
{"nome": "L", "cognome": "H", "id": 3, "costoOrario": 500, "categoria": "I" }, 
{"nome": "Z", "cognome": "D", "id": 4, "costoOrario": 100, "categoria": "T" }, 
] 

arr<JSON> presenze = [
{"anno": 2021, "numGiorno": 1, "idDipendente": 0, "orelav": 5},
{"anno": 2021, "numGiorno": 2, "idDipendente": 0, "orelav": 8},
{"anno": 2021, "numGiorno": 10, "idDipendente": 0, "orelav": 1},
{"anno": 2021, "numGiorno": 20, "idDipendente": 0, "orelav": 7},
{"anno": 2021, "numGiorno": 1, "idDipendente": 1, "orelav": 5},
{"anno": 2021, "numGiorno": 7, "idDipendente": 1, "orelav": 8},
{"anno": 2021, "numGiorno": 10, "idDipendente": 2, "orelav": 1},
{"anno": 2021, "numGiorno": 20, "idDipendente": 4, "orelav": 7}
]




function calcoloOreLavorate (presenze ){

    var oreLavorate = 0
    var id=0

    for(id=0;i<presenze.lenght;id++)

        if presenze.idDipendente = id  {

            oreLavorate += presenze.orelav

        }    
        
        else exit




    return = ore oreLavorate
}
 

  








