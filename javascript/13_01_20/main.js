
//Generate un nuovo array contenente tutti i voti di tutti i recensori

/* 
let risultato = []//dichiarato array 


for(let i=0; i<recensori.length; i++) {

        let recensore = recensori[i] 
                //inserisce il primo recensore
        let voti = recensori[i].voti 
    
        
    
    for(let k=0; k<voti.length; k++){

    console.log(voti[k])

risultato[risultato.length] = voti[k] 
        //in questo modo andiamo ad aggiungere sempre un elemento all'array
    }


} */
      
  
//altro metodo 

/* 
let risultato = []//dichiarato array 


for(let i=0; i<recensori.length; i++) {

        let recensore = recensori[i] 
                //inserisce il primo recensore
        let voti = recensori[i].voti 

        risultato = risultato.concat(voti)

        console.log(risultato)
} */

/* //CICLO FOR OFF  



let risultato = []

for(let recensore of recensori){
        //console.log(recensori)

        for(let voto of recensore.voti){
            risultato[risultato.length] = voto
            
            console.log(voto)

        }        
} */


//FOR IN 


/* let risultato = []//dichiarato array 


for(let i=0 in recensori ) {

        let recensore = recensori[i] 
                //inserisce il primo recensore
        let voti = recensori[i].voti 
    
        
    
    for(let k=0 in voti){


risultato[risultato.length] = voti[k] 
        //in questo modo andiamo ad aggiungere sempre un elemento all'array
    }
    console.log(risultato)

}  */


// let persona= {
//     nome: 'pippo',
//     cognome: 'xxx',
//     age:'18'
// }
  
// for (let key in persona){
//         console.log(persona[key])
//     }



