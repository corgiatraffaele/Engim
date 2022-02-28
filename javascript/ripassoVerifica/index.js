/* 
fai una request
crea una tabella, una row, una cella,
e all'interno inserisci i dati ricevuti dall arequest
*/

fetch('https://reqres.in/api/users')
.then((response)=>{
// Qui Posso esaminare:
// - Stato della risposta
// - Metadati (ES: headers)
return response.json()
})
.then((data)=>{
  
  let table = document.createElement('table');
  let trHeader = document.createElement('tr');//creo la 1riga
  table.style.border = "1px solid black";


  //riempo la prima riga
  for (const iterator in data['data'][0]) {
    let th = document.createElement('th');
    th.innerText = iterator;
    trHeader.append(th);
    th.style.border = "1px solid black";
  }

  //riempo la seconda riga
  
  /* 
  let trBody = document.createElement('tr');//creo la 2riga
  th.innerText = iterator;
  th.style.border = "1px solid black";
  table.append(trBody);//appendo la 2riga
  
   */
  
    

     
  table.append(trHeader);//appendo la 1riga
  document.body.append(table);
  console.log(data)
})
