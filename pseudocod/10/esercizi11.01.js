ESERCIZIO:
//scrivere una funzione che dato in input l'array inputarray restituisca in output il numero di volte 
//in cui la categoria è "CAT1"
//scrivo già l'array in javascript




let inputarray = [
    { name: 'FD', categoria: 'CAT1' },
    { name: 'DF', categoria: 'CAT2' },
    { name: 'HJ', categoria: 'CAT3' },
    { name: 'KL' },
    { name: 'CV', categoria: 'CAT2' },
    { name: 'KL', categoria: 'CAT1' }
];



function sommacat(pararray) {

    let ret = 0;

    for (const element of pararray) {

        console.log(element);     //per sapere cosa vale element

        if (element.categoria == 'CAT1')

            ret++;
    }

    return ret
}

//--------------------------------------------------------------------------------------

ESERCIZIO:
//scrivere una funzione che dato in input l'array inputarray restituisca in output un json che 
//per ogni categoria contenga il numero di elementi con quella categoria 
//es {CAT1: 2, CAT2: 2, CAT3: 1}

//scrivo già l'array in javascript
 //ricordate l'utilizzo del json:
                    json miojson = {}
                    miojson.mioattr = 1; //ogni attributo, se esiste lo usa, altrimenti lo crea
                    miojson["mioattr"] = 1; // diverso modo per fare la stessa cosa
                    string miavar = "mioattr";
                    miojson[miavar] = 1; // diverso modo per fare la stessa cosa

 //ricordate l'utilizzo delle variabili
                    int uno = 1;
                    int somma = uno + 1;
                    //

  let inputarray = [
              { name: 'FD', categoria: 'CAT1' },
              { name: 'DF', categoria: 'CAT2' },
              { name: 'HJ', categoria: 'CAT3' },
             // { name: 'KL' },
              { name: 'CV', categoria: 'CAT2' },
              { name: 'KL', categoria: 'CAT1' },
              { name: 'NEW', categoria: 'CAT4' },
                    ];



function somma(pararray) {

    let ret = {CAT1:0,CAT2:0,CAT3:0,CAT4:0};//restituisce un json
    for (const element of pararray){ // per ogni elemento dell'array
        ret[element.categoria]++   //fa la somma delle categorie uguali
    }
    return ret

}

//stampando somma(inputarray) da questo risultato 
        somma(inputarray)
        {CAT1: 2, CAT2: 2, CAT3: 1, CAT4: 1,// undefined: NaN//}

//--------------------------------------------------



function somma(pararray) {

    let ret = {};//restituisce un json
    for (const element of pararray){ // per ogni elemento dell'array

        if (!ret[element.categoria])       //se non esiste lo crea 
            ret[element.categoria]=1;       //e gli da valore 1


        else

        ret[element.categoria]++   //fa la somma delle categorie uguali
    }
    return ret

}


//HASTABLE (o DICTIONARY)


//si potrebbe risolvere con un hashtable.
//è un array di coppie dove si ha key:value 
        hastable = [{key:value},{key:value},{key:value}]
