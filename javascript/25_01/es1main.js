

/* let submit = document.getElementById('submit')

submit.addEventListener("click", function(event){
                event.preventDefault()

    let disabled = true
    submit.addEventListener('click', function(event){

            if(disabled){ event.preventDefault()
               
            
            }
})})
 */



let stat = document.getElementById("form-stuatus")
let invia = document.getElementById("invia")

let statusEnableText  = "form abilitato"
let statusDisable = "form disabilitato"

stat.innerText = statusEnableText
let isFormEnabled = false

stat.addEventListener("click",function(){

        isFormEnabled =!isFormEnabled
        if(isFormEnabled){
            stat.innerText = statusEnableText        }
                else{stat.innerText = statusDisable}
})


invia.addEventListener("click",function(event){
                if(!isFormEnabled){Event.preventDefault()
                }


})