
 // ESERCIZIO 1
// Usare Bootstrap per creare una Navbar con almeno 3 link (con testo a scelta)
// Al click su un link della navbar Utilizzare Javascript per:
// - Creare un DIV, aggingere la classe "pageContainer" al DIV ed appenderlo nella pagina
// - Appendere un H1 dentro al div appena creato
// - Aggiungere come innerText del H1 L'innertext del link cliccato
// - Eliminare evntuali container creati durante i click precedenti


// ESERCIZIO 2
// Eseguire una requesgt all indirizzo 'https://reqres.in/api/users'
// Con idati contenuti nella proprietà 'data' della risposta creare una tabella
// le clonne della tabella sono: "first_name", "last_name" ed "email"
// aggingere 2 tasti sotto la tabella: "avanti", "indietro"
// La WebApi remota 'https://reqres.in/api/users' supporta la paginazione
// significa che non ritorna tutti i dati a dispozione, ma solo un numero massimo di users per request.
// Per ottenere i dati successivi è possibile inserire il numero di pagina 'https://reqres.in/api/users?page=2'
// In ogni risposta l'api ritorna informazioni sul numero di pagina corrente ed numeoro massimo di pagine
// Usare i tasi avanti ed indietro per navigare tutti i dati disponibili nella WebApi.containerID=document.createElementById("div")



fetch('https://reqres.in/api/users').then((response)=>{
// Qui Posso esaminare:
// - Stato della risposta
// - Metadati (ES: headers)
  return response.json()
  })
  .then((content)=>{

    console.log(content)

    

  let table = document.createElement('table')
    let PrimaRiga = document.createElement('tr')



    for(const element in content['data'][0]){

      let td = document.createElement('td')

        console.log(element)

        td.innerText = element

        PrimaRiga.append(td)


          
            

    }

    for(const elem of content['data']){

      let tr = document.createElement('tr')

      


    }







    
    table.append(PrimaRiga)
    document.body.append(table)


  })



