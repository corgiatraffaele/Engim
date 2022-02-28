
/*
REGOLE:
 - Non modificare l'HTML.
 - Modificare SOLO questo file.
 - Non scrivere niente fuori dalla funzione createTable, non modificare i prametri della funzione.

OBBIETTIVI
Creare una tabella html da una lista di oggetti utilizzando i metodi del DOM di javascript.

La funzione accetta 3 parametri:
containerID: STRING -> l'ID di un elemento html in cui andra creata la tabella.
headers: ARRAY DI STRING -> I titoli degli header (TH) della tabella.
list: ARRAY DI OBJECT -> Tutti gli oggetti hanno le stesse chiavi, ogni oggetto sara una riga della tabella.

Le stringhe contenute nell array "headers" corrispondono anche alle chiavi di ognuno degli oggetti nell array "list".

La funzione non ritorna niente in caso di successo
Nel caso almeno 1 dei parametri sia undefined, la funzione ritorna la stringa '10'
Nel caso l'elemento con id=containerID non esista, la funzione ritorna la stringa '20'

ESEMPIO:
  containerID = 'contenitore'
  headers = ['nome', 'cognome']
  list = [
    {nome: 'peter', cognome: 'parker', nickname: 'spiderman},
    {nome: 'tony', cognome: 'stark', nickname: 'ironman'}]

  <div id="contenitore">
      <table>
      </div>
          <tr> <th>nome</th>   <th>cognome</th>  </tr>
          <tr> <td>Peter</td>  <td>Parker</td>   </tr>
          <tr> <td>Tony</td>   <td>Stark</td>    </tr>
      </table>

NB: Questa è solo un ESEMPIO! la funzione è pensata per essere dinamica
la tabella generata dalla funzione dipende dai parametri

SUGGERIMENTI PER RISOLVERE LA PROVA:
1) Scrivere una condizione che controlla se tutti i parametri sono valorizzati
    se almeno 1 dei parametri è undefined la funzione ritorna '10'
2) Scrivere una condizione che controlla se l'elemnto HTML con id='containerID' è presente nel DOM
    se non è presente la funzione ritorna '20'
3) Creare un elemento TABLE ed appenderlo dentro all'elemento con id='containerID'
4) Creare un TR
5) Con un ciclo creare un numero di TH appriato ed inserire in ognuno il testo corrispondente
    appendere questi TH dentro il TR appena creato. Appendere il TR dentro l'elemento TABLE
6) Con un ciclo creare un numeor di TR appropriati, dentro a questo ciclo creare un altro ciclo
    che crea un numero di TD appropriato li riempie con il testo ed appende i TD creati dentro al TR
    appendere ogni TR dentro TABLE
*/

function createTable(containerID, headers, list) {


    if (containerID == undefined || headers == undefined ||
        list == undefined) {

        return '10'
    }
    //---------------------------------------------------------

    let container = document.getElementById(containerID)

    if (document.getElementById(containerID) == null) {
        return '20'
    }

    //-----------------------------------------------------     

    let table = document.createElement('table')

    container.append(table)


    //------------------------------------------------------

    let intestazione = document.createElement('tr')

    table.append(intestazione)

    //-------------------------------------------


    for (const elements of headers) {

        let cell = document.createElement('th')
        cell.innerText = elements

        intestazione.append(cell)

        console.log({ cell })

    }

    for (const elem of list) {

        let riga = document.createElement('tr')


        for (const elements of headers) {

            let cell = document.createElement('td')

           cell.innerHTML = elem[elements]


            riga.append(cell)

        }
        table.append(riga)
    }

}