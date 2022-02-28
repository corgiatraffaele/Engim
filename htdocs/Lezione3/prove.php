<?php
$nomi= ['paola','marco'];

echo $nomi[0] . '<br>';

//voglio aggiungere un nuovo elemento

$nomi[]='maria'.'<br>';

echo $nomi[2];

//count dice quanti elementi ci sono

$num_elementi = count($nomi);
echo $num_elementi . '<br>';

//prendi l'elemento corrente
echo current($nomi).'<br>';


//prendi l'elemento successivo
echo next($nomi). '<br>';


// 'prev' prende l'elemento prima

var_dump ($nomi);

//elimino un elemento con unset
//quindi eliminiamo il $nomi[1]

unset($nomi[1]);
echo '<pre>';
var_dump($nomi);
echo '</pre>';

// stampare i nomi con indice

$i= 0;

echo $nomi[$i],'<br>' ;

$i++;
$i++;
echo $nomi[$i].'<br>';


//array di array

$personaA=['Gianni','Bianchi'];
$personaB=['Paola','Verdi'];

$persone=[$personaA,$personaB];

echo '<pre>';
print_r($persone); //printr stampa informazioni riguardo una variabile


echo '</pre>';
//voglio stampare il nome della seconda persona

echo 'Il nome della seconda persona è '. $persone[1][0].'<br>';

//come faccio ad aggiungere un'altra persona?

$personaC=['Antonio','Rossi'];

$persone[]=$personaC;

print_r($persone);

echo '<pre>';
print_r($persone);


//oppue

$persone[]=['Marta','Verdi'];
print_r($persone);

//Se volessi correggere Paola Verdi in Paolo Verdi


$persone[1][0]= 'Paolo';

print_r($persone);


//Possiamo creare array con n dimensioni e con tipi arbitrari
//generando dei mostri

$persone[1][0]=['Paolo',
                ['paolo.gmail.com'],
                ['0111154581','321545161']];

print_r($persone);



