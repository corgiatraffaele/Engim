





let form = document.createElement('form')

let nome = document.createElement('input')
    nome.type ='text'

let password = document.createElement('input')
    password.type ='text'

let repeatPassword = document.createElement('input')
    repeatPassword.type ='text'

let submit = document.createElement('button')
    submit.innerText = 'invia'


form.append(nome, password, repeatPassword,submit)


document.getElementById(form)

document.body.append(form)


submit.addEventListener('click', function(Event){
 
        if(nome.value === ''){
            alert('mettere il nome')
        }

        if(password.value === ''||password.value.length < 8){
            alert('password non valida')
        }

        if(repeatPassword.value === password||repeatPassword.value === ''){
            alert('password diversa')
        }




    









})
