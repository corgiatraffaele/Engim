let testCreateCards = (()=>{
    let DEBUG = false
    let randomID = 'xyzqwertymnbvcx'
    let randomWrongID = randomID + '1234567890'
    let randomList = [
        {firstName:'pippo', lastName:'pluto'},
        {firstName:'naruto', lastName:'ukumaki'}
    ]
    let randomHaders = ['firstName', 'lastName']

    let withContainer = (message, points=10, testFunction)=>{
        return (callback)=>{
            let results = [0, points, message]
            let container = document.createElement('div')
            container.id = randomID
            document.body.append(container)
            try{ results = [testFunction(callback), points, message] }
            catch(e){
                if(DEBUG){ console.log('Hai fatto un ERRORE'); console.log(e) }
                // results = 0
            }
            container.remove()
            return results
        }
    }

    let tests = [
        // Correct number of
        withContainer(
            'Create a div for each film, and append it in container', 10,
            (callback)=>{
                callback(randomID, movies, actors)
                return document.querySelectorAll(`#${randomID} div`).length === movies.length
            }
        ),
        withContainer(
            'Each div has a h3 inside it?', 10,
            (callback)=>{
                callback(randomID, movies, actors)
                let cards = [...document.querySelectorAll(`#${randomID} div`)]
                return !!cards.length && cards.every((card)=>{
                    return !!card.querySelector('h3')
                })
            }
        ),
        withContainer(
            'Each div has a h3 inside it with film "Title" property?', 10,
            (callback)=>{
                callback(randomID, movies, actors)
                let cards = [...document.querySelectorAll(`#${randomID} div`)]
                return !!cards.length && cards.every((card, index)=>{
                    return card.querySelector('h3').innerText === movies[index].Title
                })
            }
        ),
        withContainer(
            'Each div has an img inside it?', 10,
            (callback)=>{
                callback(randomID, movies, actors)
                let cards = [...document.querySelectorAll(`#${randomID} div`)]
                return !!cards.length && cards.every((card)=>{
                    return !!card.querySelector('img')
                })
            }
        ),
        withContainer(
            'Each div has an img inside it with src equal to film "Poster" property?', 10,
            (callback)=>{
                callback(randomID, movies, actors)
                let cards = [...document.querySelectorAll(`#${randomID} div`)]
                return !!cards.length && cards.every((card, index)=>{
                    return card.querySelector('img').src === movies[index].Poster
                })
            }
        ),
        withContainer(
            'Each div has a p inside it?', 10,
            (callback)=>{
                callback(randomID, movies, actors)
                let cards = [...document.querySelectorAll(`#${randomID} div`)]
                return !!cards.length && cards.every((card, index)=>{
                    return !!card.querySelector('p')
                })
            }
        ),
        withContainer(
            'Each div has a p inside with innerText containing the names of all the actors who participated in the movie?', 20,
            (callback)=>{
                callback(randomID, movies, actors)
                let cards = [...document.querySelectorAll(`#${randomID} div`)]
                return !!cards.length && cards.every((card, index)=>{
                    let actorText = card.querySelector('p').innerText
                    return movies[index].Actors.every((actorID)=>{
                        return actorText.includes(actors[actorID].name)
                    })
                })
            }
        ),
    ]

    return (callback)=>{
        mark = tests.reduce((acc, testFunction, i)=> {
            let [results, points, message] = testFunction(callback)

            if(results) console.log( '%c ✔ ' + `%c${message} (${points} punti)`, 'color:#5cffa8;' , '' )
            else console.log( '%c ❌ ' + `%c${message} (${points} punti)`, 'color:#fc5a95' , '' )

            return acc + (!!results ? points : 0)
        }, 0)
        console.log(' ')
        console.log(
            `%c ${
                mark <60 ? '👎'
                    : mark <100
                        ? '👍'
                        : '🏆'
                } Il tuo voto è ${mark} su 80`,
            `color:${ 
                mark <60 ? '#fc5a95' 
                    : mark <100 
                        ? '#5cffa8'
                        : '#4891f7'
            };
            font-size:14px;
            font-weight:bold;
            `
        )
    }
})()




