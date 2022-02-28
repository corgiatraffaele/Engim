
var a; //dichiaro una variabile
a = 4; // inizializzo una variabile
console.log(a) // stampa la variabile



// per usare una variabile non definita o che non si conosca

var a = 4; // dichiarata e inizializzata una variabile

//le var sono Case-sensitive cioè il nome deve avere le maiuscole e le minuscole esatte
//non deve ccoincidere con parole chiave ( es. var, if , for...)
// non può iniziare con un numero e no spazi
// no caratteri speciali come . e - ma può avere _
// utilizzare Maiuscole per separare le parole nel nome della var
//il primo carattere non può essere un numero



// tipi di dati
    // booleano
    //numerico
    //NULL valore nullo
    // stringa di testo ( si può scrivere con apice singolo o doppio )
                    var testo = 'salgo sukl'albero' // si può risolvere con  
                    var testo =  'salgo sull\albero' oppure
                    var testo =  "salgo sull'albero"  

//Costanti:
    //non si può cambiare in un secondo momento, non pùò cambiare il valore
        const TEST = 6;
        TEST = 18;// -> non si può !

    // Le costanti si scrivono in MAIUSCOLO 


//STRICT MODE
    // esiste un modo per una modalità rigida e gli errori non sono commessi 
    'use strict'; // è il comando e se si fa un errore lo segnala

    // lo SCOPE è il luogo di appartenenza del codice ossia il pezzo di codice in cui quella cosa è visibile

//COMMENTI

    // è una buona cosa commentare spiegando quello che si è fatto
    // si fa con // per una riga
    // oppure
    
    /* per un blocco 
    di codice */ 


//OPERATORI MATEMATICI
// +,-,*,/,%
    const A = 12;
    const B = 4;
    var result;

    result = A + B; // es somma
    result = A % B; // è il resto della divisione

// altri 5 operatori che servono ad abbreviare le formule 

    a += 3; //a = a +3
    a -= 3; //a = a -3 
    a *= 3; //a = a *3
    a /= 3; //a = a /3 
    a %= 3; //a = a %3

         var a = 12;
            a +=2;
            a = 24;

    //Altri 2 operatori 
    ++ //incrementa di uno
    -- // diminuisce di uno

    a = 49 
    a++
    a =50



//CONCATENAZIONE
    //l'operatore di concatenzaione è il +
    //serve per unire  più stringhe 
    // se sono numeri li somma, se sono stringhe fa la concatenazione
    // anche se si ha un numero e una stringa fa una concatenazione 
      const A = 45;
      const B = ciao 
      console.log (A + B) = 45ciao;

        // il comando parseInt trasforma la stringa in Num
            parseInt ('ciao');
                Nan // non a number 

    var a = '3';
    var b = '4';

    a + b = '34'; //perchè fa la concatenazione
    
 //   --------------
    var a = prompt ('inserisci il valore di a');// stampando viene fuori come un alert modificabile



//OPERATORI DI CONFRONTO

 // == uguale
 // === identico
 // != diverso
 // !== non identico 
 // <  minore
 //  > maggiore
 //  <= minore uguale
 //  >= maggiore uguale

 // restituiscono sempre true or false.
 //l'operatore di uguaglianza confronta il valore
 // l'op di identicià confronta sia il valore che il tipo quindi devono essere entrambi identici.
 '18' == 18 true
  '18' === 18 false 
  '18' != 18 false
// nel confronto tra due stringhe le mette in ordine alfabetico ( prima le maiuscole e dopo le minuscole )  
  a > b = true
  a < B = false
    // per trasformare tutto in maiusolo o tutto in minuscolo si usano i comandi:
        toLowercase()   //per trasformare tutto in minuscolo
        toUppercase()   // per trasf. tutto in maiuscolo

//OPERATORI LOGICI

//fanno il confronto tra due variabili

// && AND (restituisce vero solo se tutti sono veri)
                   

// || OR (basta anche solo un vero per far si che diventi vero )


// ! NOT  (da il contrario)

    var c = true;
        !c= false;

// prima si calcolano i booleani e poi si fanno gli operatori logici 


//var e let hanno poca differenza (var +vecchio let dal 2015)

// modi di dichiarare una var:
  1)  let miavariabile
      miavariabile = 'hello!'
    
  2) let altravariabile =5 
    altravariabile = 'world'
    altravariabile = null

  // le variabili non possono essere dichiarate più volte es:
  let miavariabile
    miavariabile = 'hello!'
  
  let miavariabile
     miavariabile = 'world' //ERRORE

 //Valori assegnabili ad una variabile:
    valori semplici o primitivi:    Boolean
                                    Number
                                    String
                                    undefined
                                    null

                                    
                                    espressioni
                                    function 

// strutture dati ossia insime di valori primitivi
    array // lista ordinata, e non esistono più elementi nello stesso livello
            //serie di elementi separati da una virgola 
            //ad ogni valore corrisponde un indice numerico univoco
            //si accede al valore tramite il suo indice
            //non ha una dimensione fissa


            let a = ['avalue','b',24,'hola',null, false]       
            indice elemento  0     1  2    3     4     5

            es:
            //definizione
            let a = ['avalue','b',24,'hola',null, false]      
                
            //lettura 
            console.log(a)
            console.log(a(1))
            
            //scrittura (modifica)
            a[1] = 'changedValue'
            a[4] 0 'newIndex'

            console.log(a) 


        


    oggetti// composta 'chiave:valore'e non è ordinata


    //servono a raggruppare dati in maniera sensata
    //si possono eseguire operazioni specifiche



    //JSON (stringa unica con dentro file formattati JSON)


    //SINTASSI ALTERNATIVA
        //si possono aggirare le regole delle chiavi

        //ESEMPIO DELLE DIVERSE SINTASSI DEGLI OGGETTI
    
    let persona = { nome: 'pippo', 
                    cognome: 'topolino',  
                    'nome cane': 'pluto',
                    'lavoro': 'disoccupato'}

    console.log(persona)
    
    console.log(persona.nome)
    console.log(persona ['nome cane'])
    console.log(persona.lavoro)   
    console.log(persona['nome'])

    console.log(persona.nome_cane) //errore perchè la sintassi è diversa 

    //scrittura  //creando una chiave che non c'è nell'oggetto
    let nomeChiave = 'eta'
    persona[nomeChiave] = 25
    console.log(persona['età'])
    
    //lettura
    let x = 'nome'
    console.log(persona[x])


//Esempio di Arrey di oggetti
    
    let recensori = [
        {nome:'topolino'},    //valore
        {nome:'pippo'},
        [5,4,6,7,{parola:'ciao'}],
        {nome:'paperino'},
            ]

                console.log(recensori[0])
                console.log(recensori[0].nome)  // si richiama il valore [{topolino}]

                console.log(recensori[3][2]) // si richiama il numero 6 

                console.log(recensori[3][4].parola)// si richiama 'ciao'


//JSON 
// le chiavi sono sempre stringhe con i doppi ''
//anche i valori 
// solo i numerici e i null e gli undefined non li hanno
// l'elemento può iniziare con una [] se è un array o una {} se è un oggetto
//è una stringa unica

JSON.stringify() trasforma in JSON ossia una stringa  
JSON.parse()    trasforma un jason in un object o array
