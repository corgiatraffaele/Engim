<?php
echo '<pre>';
//=> serve per associare un etichetta

$personaA=['name'=>'Gianni','surname'=> 'bianchi'];

echo $personaA['name'];

$persone[0]=$personaA;

//se voglio aggiungere Paola Verdi:

$persone[]=['name'=>'Paola','surname'=> 'Verdi'];

//aggiungo la mail di Gianni

$persone[0]['email']='gianni.verdi@gmail.com';

print_r($persone);


//l'alternativa sarebbe

$persone[0]=['name'=>$persone[0]['name'],
             'surname'=>$persone[0]['surname'],
             'email'=>'gianni.verdi@gmail.com'];

             print_r($persone);


//Se voglio aggiungere il telefono 

$persone[0]['tel']=['0119999','333444'];
    
print_r($persone);