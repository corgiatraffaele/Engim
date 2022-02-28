
//scrivere una serie di if-elsef-else che controlla l'età della persona
//se è minore di 10 anni legga in console 'sei un bambino'
//se ha + di 10 anni ma meno di 18 legga 'sei un adolescente'
//se ha 18 e + di 18 anni legga 'sei un adulto'




let persona = {
    nome: 'pippo',
    age: 12
}


if (persona.age <= 10) {

    console.log("sei un bambino")
}


 else if (persona.age >= 18){

    console.log("sei un adulto")

}
else {

    console.log ("sei un adolescente")

}

/------------------------------------------------------------

