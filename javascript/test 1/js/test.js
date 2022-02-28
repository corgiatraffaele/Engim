let testCreateTable = (()=>{
    let DEBUG = false
    let randomID = 'xyzqwertymnbvcx'
    let randomWrongID = randomID + '1234567890'
    let randomList = [
        {firstName:'pippo', lastName:'pluto'},
        {firstName:'naruto', lastName:'ukumaki'}
    ]
    let randomHaders = ['firstName', 'lastName']

    let withContainer = (testFunction)=>{
        return (callback)=>{
            let results = 0
            let container = document.createElement('div')
            container.id = randomID
            document.body.append(container)
            try{ results = testFunction(callback) }
            catch(e){
                if(DEBUG){ console.log('Hai fatto un ERRORE'); console.log(e) }
                results = 0
            }
            container.remove()
            return results
        }
    }

    let tests = [
        // All parameters should be defined
        withContainer((callback)=>{
            return callback()==='10' && callback(randomID, randomHaders, randomList)!=='10' ? 5 : 0
        }),
        // Container should be defined
        withContainer((callback)=>{
            return callback(randomWrongID, randomHaders, randomList)==='20'
            && !callback(randomID, randomHaders, randomList)!=='20' ? 5 : 0
        }),
        // Table sohuld exist in container
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            return !!document.querySelector(`#${randomID} table`) ? 10 : 0
        }),
        // Header should exist in table
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            return !!document.querySelector(`#${randomID} table tr`) ? 10 : 0
        }),
        // Number of headers should be same as list length
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            let headers = document.querySelectorAll(`#${randomID} table tr th`)
            return !!headers && headers.length === randomList.length? 20 : 0
        }),
        // Number of headers should be same as list lenght and each inerText should be correct
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            let headers = [...document.querySelectorAll(`#${randomID} table tr th`)]
            if(headers.length==0) return 0
            let result = headers.reduce((acc, head, i)=>acc && randomHaders[i] === head.innerText, true)
            return result? 20 : 0
        }),
        // Number of rows should be correct
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            let rows = [...document.querySelectorAll(`#${randomID} table tr`)]
                .filter((row)=>row.children[0] && row.children[0].nodeName !== 'TH')
            return rows.length === randomList.length? 10 : 0
        }),
        // Number of td in each rows should be correct
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            let rows = [...document.querySelectorAll(`#${randomID} table tr`)]
                .filter((row)=>row.children[0] && row.children[0].nodeName !== 'TH')
            if(rows.length !== randomList.length) return 0
            let result = rows.reduce((acc, row)=>{
                return acc && row.children.length === randomHaders.length
            }, true)
            return result? 10 : 0
        }),
        withContainer((callback)=>{
            callback(randomID, randomHaders, randomList)
            let rows = [...document.querySelectorAll(`#${randomID} table tr`)]
            if(rows.length < randomList.length) return 0

            let result = rows
                .filter((row)=>row.children[0] && row.children[0].nodeName !== 'TH')
                .reduce((acc, row, index)=>{
                let isNumberCorrect = row.children.length > 0 && row.children.length === randomHaders.length
                if(!isNumberCorrect) return false
                return acc && [...row.children].reduce((accb, cell, ib)=>{
                    return acc && cell.innerText === randomList[index][randomHaders[ib]]
                }, true)
            }, true)
            return result? 10 : 0
        }),
    ]

    return (callback)=>{
        let checklist = [
            {passed: false, text: "Controllo: se almeno 1 dei parametri della funzione è undefined la funzione rintorna '10'"},
            {passed: false, text: "Controllo: se il container non esiste la funzione ritorna '20'"},
            {passed: false, text: "TABLE: Tag <table></table> creato?"},
            {passed: false, text: "HEADER: Tag <tr></tr> creato?"},
            {passed: false, text: "HEADER: Tag <th></th> sono il numero giusto?"},
            {passed: false, text: "HEADER: ogni Tag <th></th> contiene il testo giusto?"},
            {passed: false, text: "BODY: Tag <tr></tr> sono in numero corretto?"},
            {passed: false, text: "BODY: Tag <tr></tr> contengono TUTTI il numero di <td></td> corretti"},
            {passed: false, text: "BODY: Ogni Tag <td></td> contiene il testo giusto?"},
        ]
        mark = tests.reduce((acc, testFunction, i)=> {
            let results = testFunction(callback)

            if(results > 0){
                console.log( '%c ✔ ' + `%c${checklist[i].text}`, 'color:#5cffa8;' , '' )
            }
            else{
                console.log( '%c ❌ ' + `%c${checklist[i].text}`, 'color:#fc5a95' , '' )
            }

            return acc + results
        }, 0)
        console.log(' ')
        console.log(
            `%c ${
                mark <60 ? '👎'
                    : mark <100
                        ? '👍'
                        : '🏆'
                } Il tuo voto è ${mark} su 100`,
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




