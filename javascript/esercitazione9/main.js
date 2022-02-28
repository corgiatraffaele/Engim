/* let logPippo = ()=> {
    console.log('pippo')
}

logPippo()

let logSmt= (Text) => {
    console.log(Text)
}

logSmt('hello world')


let squared = num=> num*2
console.log (squared (2)) */

/* fetch('https://reqres.in/api/users')
.then((response)=>{
if(response.status<205){ return r.json() }
throw Error(response.statusText)
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
console.log('Errore ', error)
}) */

fetch('https://reqres.in/api/users')
.then((response)=>{
// Qui Posso esaminare:
// - Stato della risposta
// - Metadati (ES: headers)
console.log(response)
return response.json()
})
.then((data)=>{
// In questo blocco ho accesso ai dati
console.log(data)
})