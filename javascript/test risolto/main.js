/*



OBBIETTIVO
Per ogni film creare una card(DIV) contenete
 - titolo del film (h3)
 - immagine (IMG)
 - Lista degli attori principali (P)
inserire le card create nell'elemento contenitore

REGOLE:
Scrivere solo all'interno della funzione createCards al fondo di questo file
Per risolvere questa prova utilizzare solo i 3 parametri passati alla funzione:

 - containerID: contiene una stringa uguale all'id di un elemento presente nel dom
 - movies: array di oggetti ognuno dei quali rappresenta un film (VEDI ESMEPIO SOTTO)
 - actors: oggetto per cui ogni CHIAVE (type number) rappresneta l' ID dell'attore, ogni VALORE(type object) rappresenta un attore (VEDI ESMEPIO SOTTO)

Non devi eseguire la funzione "createCards": essa viene gia automaticamente eseguita numerose volte dallo script che calcola la STIMA del voto





PROCEDURA PER RISOLVERE L'ESAME:
1) Creare un div per ogni film ed appendere ongnuno dei div creati dentro all'elemento dom con id uguale al valore contenuto in containerID
ATTENZIONE: "containerID" è un parametro della funzione "createCards", conainerID continene una string.

2) Per ognuno dei div creati nel punto 1, creare un H3 ed impostare la proprieta innerText uguale al titolo del film contenuto nella proprietà "Title"
appendere l'H3 appena creato dentro al div
ATTENZIONE: alcune chiavi degli oggeti film cominciano con una lettera maiuscola (ES: Title)

3) Per ognuno dei div creati nel punto 1:
Creare un IMG ed impostare la proprieta src uguale al conentuto della proprietà "Poster"
Cppendere l'IMG appena creato dentro al div

4) Per ognuno dei div creati nel punto 1:
Ottenere gli oggetti corrispondenti agli attori che hanno partecipato al film. I loro id sono contenuti nella proprietà "Actors"
Gli oggetti attori sono contenuti nel parametro "actors" della funzione "createCards"
Concatenare i nomi degli attori in un unica string utilizzando un separatore(a tua scelta) per separare i nomi
Creare un elemento P ed impostare la proprieta innerText con la string appena create con i nomi degli attori
appendere il P nel div

5) CONSEGNA: Rinominare questo file da main.js a main.js.txt e spedire via e-mail al docente all'indirizzo "massimo.santoli@engimtorino.net"




ESEMPIO ARRAY MOVIES
[
    {
        id: 102
        Actors: [10, 23, 40]
        Title: "Blade Runner 2049"
        Poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
    },
    {
        id: 98
        Actors: [10, 23]
        Title: "The Imitation Game"
        Poster: "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg"
    }
]

ESEMPIO OGGETTO ACTORS
{
    10: {
        id: 10
        name: "Leonardo DiCaprio"
        movies: [103, 107, 132]
    },
    23: {
        id: 11
        name: "Elliot Page"
        movies: [107]
    }
    40: {
        id: 40
        name: " Mila Kunis"
        movies: [113]
    }
}
* */

function createCards(containerID, movies, actors){

    /* per ogni INDICE (cioè film) dell'elemento movies */
    for (const iterator of movies) {

     
        let Film = document.createElement('div');     
        let containerFilm = document.getElementById(containerID);
        //non appendere qui l'elemento div al container appendilo alla fine !!

        let title = document.createElement('h3');
        title.innerText = iterator.Title;
        //non appendere qui l'elemento titolo appendilo alla fine prima del div

    
        let imgFilm = document.createElement('img');
        imgFilm.src = iterator.Poster; 
        //non appendere qui l'elemento immagine appendilo alla fine dopo il titolo con .after

        //bene hai creato i tuoi vari paragrafi
        let paragrafo = document.createElement('p');


            /* stai gia ciclando movies!! questo for non ti serve

            for (const film of movies) {  NOO!! */


                
             let ArrayId = iterator["Actors"];
                
            let ActorsArray = [];

            // mi ricavo i singoli valori (numeri) dell'array
            for (const Id of ArrayId) {

                //era giusto ma actorsarray è un array quindi se
                // gli vuoi mettere dentro un elemento gli devi dare un indice a cui assegnarlo
                //per mettere un elemento alla fine dell'array si usa 
                //array[array.lenght]= qualcosa

                ActorsArray[ActorsArray.length] = actors[Id]["name"];
                //questo fr ci farà mettere nell'array un nome di attore alla volta
            }
            
            //fuori dal for avrò un array di vari nomi che posso concatenare
            paragrafo.innerText = ActorsArray.concat();
                
                    

            //qui alla fine ho appeso gli elementi dentro a film e solo alla fine appendi film dentro al container
            Film.append(title);
            title.after(imgFilm);
            Film.appendChild(paragrafo);
            containerFilm.append(Film);

        
    }
   
}



