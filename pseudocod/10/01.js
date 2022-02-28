let inputarray = [
    {name: 'FD', categoria: 'CAT1'},
    {name: 'DF', categoria: 'CAT2'},
    {name: 'HJ', categoria: 'CAT3'},
    {name: 'KL'},
    {name: 'CV', categoria: 'CAT2'},
    {name: 'KL', categoria: 'CAT1'}
    ];
    function int somma (array<json> pararray) {

                var int tot= 0;
            for(const element of pararray){
//ogni elemento di pararray si chiama element

                if(element.categoria == CAT1)
                tot += 1; 

            }

                return tot;
    }

    function totali=()
    miojson.mioattr=1;
    miojson ["mioattr"]=1;

    function totali (pararray){
        if (element.categoria == CAT 1)
            tot.CAT1 ++1;

        else if (element.categoria == CAT2)
            tot.CAT2 +=1;

      else if (element.categoria == CAT3)
        tot.CAT3 +=1;



//oppure
switch(element.categoria){

        case 'CAT1'
        //fai qualcosa
        tot.CAT1 += 1
        breack

        case 'CAT2'
        //fai qualcosa
        tot.CAT2 += 1
        breack

        case 'CAT3'
        //fai qualcosa
        tot.CAT3 += 1
        breack



}

    }


    //risoluzione
    //scrivere una funzione che dato in input l'array inputarray restituisca in output un json che 
//per ogni categoria contenga il numero di elementi con quella categoria 
//es {CAT1: 2, CAT2: 2, CAT3: 1}

//json miojson=[]
//miojson.mioattr=1; //ogni attributo, se esiste lo usa altrimenti lo crea
//miojson["mioattr"]=1,//diverso modo per fare la stessa cosa
//string miavar = "mioattr";
//miojson[miavar]=1; //diverso modo per fare la stessa cosa



let inputarray = [
    {name: 'FD', categoria: 'CAT1'},
    {name: 'DF', categoria: 'CAT2'},
    {name: 'HJ', categoria: 'CAT3'},
    {name: 'KL'},
    {name: 'CV', categoria: 'CAT2'},
    {name: 'KL', categoria: 'CAT1'}
    ];

    function totali (pararray){
//ogni elemento di pararray si chiama element

    }

for(const element of pararray)
   tot[element.categoria] ++



   