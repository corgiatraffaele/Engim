// ESERCIZIO 1
// RISOLTO IN AULA
// Cambiare colore ad un paragrafo ogni secondo
let colori = ['#f00', 'green', 'blue', '#4e4e4e', 'purple' ]

let paragrafo = document.getElementById('pippo')

let index = 0
setInterval(function(){
    let max = colori.length-1

    paragrafo.style.color = colori[index]

    if(index >= max ){  index=0 }
    else{ index++ }
},1000)

// ESERCIZIO 2
// SIMILE AL PRECENDENTE MA CON UN IMMAGINE:
// Inserire un tag IMG nel file html senza nessun url
// creare un array con almeno 5 url di immagini
// scrivere uno script che cambi l'url dell immagine on 2 secondi



// ESERCIZIO 3
// Uare 2 prompt in sequenza che chiedano rispettivamente nome e congome
// usare i risultati dei 2 promt per popolare un tag h1 con "Ciao nome cognome!"
