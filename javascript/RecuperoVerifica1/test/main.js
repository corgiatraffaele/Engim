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

    for(const movie of movies){

        let movieDiv = document.createElement('div')
        let containermovie = document.getElementById(containerID)
        containermovie.append(movieDiv)

        let Title = document.createElement('h3')
        Title.innerHTML= movie.Title
         movieDiv.append(Title)


        let img = document.createElement('img')
            img.src = movie.Poster

            movieDiv.append(img)
       
        let p = document.createElement ('p')
            p.innerText= movie.Actors
            movieDiv.append(p)

        

        for(element of movie["Actors"]){
            
            actors[element]["name"]
                    

        }
        
      let att =  actors[element]["name"]
                
        
    
    }






 }

    
   




