fetch('https://reqres.in/api/users').then((response)=>{

  return response.json()
  })
  .then((content)=>{


let table = document.createElement('table')

let riga = document.createElement('tr')

let nome = document.createElement('td')
    nome.innerText = 'nome'
   
let cognome = document.createElement('td')
    cognome.innerText = 'cognome'
    
let email = document.createElement('td')
   email.innerText = 'email'
   
   
   
            for(const element of content.data){

                console.log(content.data)

              

                let nome = document.createElement('td')
               nome.innerText = element.first_name

                let cognome = document.createElement('td')
                cognome.innerText = element.last_name
                
                let email = document.createElement('td')
                email.innerText = element.email

                let tr= document.createElement('tr')
                
                console.log(element)

                document.getElementById('bottone')

                let bottone = document.createElement('button')
                bottone.innerText = 'elimina'
                
                bottone.addEventListener("click",function(event){
                    tr.remove()
                })


                myStorage = window.localStorage;
                localStorage.clear();

                
                tr.append(nome,cognome,email,bottone)
               table.append(tr)
               

            }
                
   
    
  document.body.append(table) 
    table.append(riga)
    riga.append(nome)
    riga.append(cognome)
    riga.append(email)
   



  })