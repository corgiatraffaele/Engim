/* 
function x(){
    console.log("hello world")
}
    let y = x

    console.log(typeof(x)) //risultato function
    console.log(typeof(y)) //risultato function

    y()



    let persona={
        nome:"giovanna",
        z: y
    }
console.log(persona.z)
persona.z()






//set time out permette di eseguire di eseguire una funzione dopo un certo quantitativo di tempo.
//ha 2 parametri (algoritmo,numero di ms)


// Dichiarazione
function logToConsole(){

console.log('interval')
console.log('2 secondi')
}
// Utilizzo
setTimeout(logToConsole, 2000)


//funzioni ANONIME
//quando non si ha bisogno di dichiarare una variabile per riutilizzarla in futuro.
  


setTimeout(function(){
    console.log('5 secondi')
},5000)


//SET INTERVAL

//ripete la funzione ogni x
//setInterval(function(),numero di intervalli tra una ripetizione e l'altra)


setInterval(function()  {
    console.log('1secondo')
},1000);
 */

//this. - è una chiave speciale che permette di richiamare se stesso

/* 
let x = {
    firstname:'peter',
    lastname:'parker',

    fullname: function(){
        return this.firstname + ' '+ this.lastname
    }

}
console.log(x)
console.log(x.fullname())

 */


//DOM
//esempio
/* 
let pippoDOM = document.getElementById('pippo')
console.log({pippoDOM})
 */

//va a ricercare 'pippo' nell'HTML

let colori = [green,white , #f00, #4e4e]

let paragrafo = document.getElementById('pippo')
console.log({pippoDOM})

let index = 0 

setInterval(function()) {
    let max = color.length-1

    paragrafo.style.color = colori[index]

    if(index >= max){
        index=0
    }
    else{index++}

},1000)



/* Esercizio */
//cambiare colore al paragrafo 