//Scrivere una funzione che accetti in input un array di int e restituisca in output la somma di tutti gli elementi  

 
Array<int> test = [20, 2, 5, 4 ,6 ];

console.log (test [0])

function int risultato ( array, numeri){
        int ret = 0;

        for ( int i=0; i < numeri.len, i++){
            ret += numeri[i]
            }
            return ret;

        }

Array<int> test =[20,2,5,4,6];

console.log  (risultato(test)) //37
console.log (risultato (0,4,5)) //9

//------------------------------------------------------------------------


//scrivere una funzione che accetti in input  un array e restituisce in output la somma di tutte le lunghezze


function int TotAlLen (Array<Array<object> lunghezza){

        int ret= 0;

        for (int i=0; i<lunghezza.len, i++) {

                ret += lunghezza[i].len                
        }

        return ret

}
//-----------------------------------------------------

//
b.name= a.name

b.active = a.active

var myjson= {"chiave ": "valore "}
mioj.nuovachiave = 3;

var nuovoj = JSON.stringify(myjson)

nuovoj=JSON.parse(nuovoj)

nuovoj.chiave 1

//scrivere una funzione che dato un json restituisca in output una copia del JSON ( contenuto e non puntatore)


function JSON copia (JSON jsonorigine){

                        return JSON.parse(JSON.stringify(jsonorigine));
                }

                JSON vecchioJson = ("chiave1": "valore1");
                JSON nuovoJson = copia (vecchioJson);


// abbiamo un Json così definito:
JSON studente = {"nome"; "nome1", "cognome":"cognome1", "presenze": [4,5,7,8]} 

//scrivere una funzione che ha in input il JSON studente e restituisce in output la somma delle sue presenze

                function contaPresenze (Json studente){
                        
                        int sommaPresenze = 0;

                        for (int i=0; i< studente.presenze.len; i ++){

                                sommaPresenze += studente.presenze[i];

                        }

                                return sommaPresenze

                }
                console.log(contaPresenze(studente)); //24



 //-------------------------------------------------

 var miojson{
	"name": "Mario",
	"surname": "Rossi",
	"active": true,
	"favoriteNumber": 42,
	"birthday": {
		"day": 1,
		"month": 1,
		"year": 2000
	},
	"languages": [ "it", "en" ]
}
     
miojson.languages  //richiama il campo langueges
->(2) ["int","en"]

miojson.languages.length //la lunghezza di mio json languages
->2

nuovarr: [0,3,5,4]

miojson.nuovoarr.length //nel nuovo arr aggiunto al json ci sono 4 array
->4

//per sommare gli elementi di un array nel json  

        function (int i=0;i<miojson.nuovoarr.length; i++){
                ret += miojson.nuovoarr[i]}
                
                console.log(ret)

var = ret = 0
        }








// scrivere un json che contenga :
/*      nome 
        cognome
        id(num)
        costo orario 
        Categoria ('i','d',' t') */
        //risoluzione

var miojson ={
        'nome': 'pippo',
        'cognome': 'topolino',
        'id': 5,
        'costoorario':10,
        'Categoria':'i'
} 
 // eiste un archivio delle presenze dell'anno corrente:
        //Data(indica un giorno)
        // idDipendente(id di sopra)
        // ore lavorate(Number)


var secondojson = {
                'anno' :2022,
                'data':53,
                'idDipendente': 5, 
                'ore_lavorate': 8,
}




//quindi volessimo creare un registro di dipendenti
//faremo un: 


        array<JSON>dipendenti = [{},{},{}]

//considerando che i dati indicati sopra sono del primo dipendente in nel posto [0]

        dipendenti[0].costoorario
                -> 10


                






