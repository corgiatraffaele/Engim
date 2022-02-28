
<?php


//dichiariamo un Array
$week=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

//come accedere ad un elemento

printf('%s %s <br>',$week[0],$week[6]);

//lo stesso posso farlo con echo

echo $week[0] . ' '. $week[6] . '<br>';

//oppure

echo "$week[0] $week[6]<br>"; 

echo "l'array all'indice 2 contiene: ". $week[2]. '<br>';

//riassegnare un elemento negli array
//sostituiamo [2]

$week[2]='Mer'; //il giorno in italiano

echo "l'array all'indice 2 contiene: ". $week[2]. '<br>';
