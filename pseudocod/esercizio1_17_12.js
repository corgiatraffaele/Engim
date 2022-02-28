

/*Scegliete nomi e tipo di variabili  per memorizzare queste informazioni.
        nome e cognome di uno studente \\ 2 stringhe\\
        età \\ int 
        sesso \\ char
        indirizzo \\ stringa
        codice fiscale \\ stringa (in base dati c'è il dato char di x caratteri)
        possessore di green pass \\ booleano
        presenza in ore \\ float decimale 
        assenza in ore \\ float decimale
        giorni frequentati\\ int

        array di array ( con le frequenze)

        Nel programma esiste un array con tutti i giorni frequenti a scuola
        ogni elemento nell'arrey è un arrey di presenze per lo studente(lo riconosciamo dall'indice)

        scrivere un funzione che dato in input l'arrey con le presenze di tutti gli studenti 
        restituisca il suo totale di ore frequentate.*/




var str name
var str surname
var int age 
var char sex()
var str address
var cha fiscalCode
var bool greenPass (true/false)
var f presenceHour
var f absenceHour
var int attendendDays 


 array<float>pagineRegistro = [1.2,3, ecc]/* ogni pagina è un arrey di questo tipo  */

array <float>paginaRegistro [[],[],[],[], ecc]/*  ogni arrey è una pagina del registro */

    function float getAttendeHours (array registry,int student)
    /* per lo studente in input sommo tutte le ore frequentate in ogni giorno */
    /* INPUT reg, arrey di registro con per ogni el una pagina di registro contiene un array di float con le presenze dello studente */
    /* esempio [[7.2,8,8][0,4,4]] dove ogni elemento è un giorno, ogni giorno contiene le ore di ogni studente per lo studente 0, ret => 7,2+0 = 7.2  */
    /* OUTPUT ret, somma di tutte le presenze dello studente */
    /* per lo studente in input sommo le ore frequentate in ogni giorno */


    float ret=0;
 

/* per ogni pagina del registro sommo le ore dello studente  */

for (int x=0, x<reg.len; x++)
        /* per ogni pagina del registro   |x++=x+1| */
    ret=ret +reg[x] [student]
/* corrisponde a ret+= reg[x][student] */




return ret;

/* reg è un array dove ci sono pagine reg[pag1,pag2...] 
pag è un array*/















