

<?php
// riscaldamento
echo "Questa è la lezione 3";

echo '<br>';
$a=5;
$b=10;

echo "La variabile a vale" . $a . '<br>';
echo "La variabile b vale" . $b;

$tot=$a+$b;

echo 'la somma di $a e $b vale '. $tot .'<br>';
$c=$a-$b;

echo 'la sottrazione di $a e $b vale '. $c .'<br>';

$d=$a*$b;

echo 'il prodotto di $a e $b vale '. $d .'<br>';

$e=$a/$b;

echo 'la divisione di $a e $b vale '. $e .'<br>';

 //es6
echo date('d/m/Y');
echo '<br>';

echo date('Y-m-d');
echo '<br>';


 //imposto il timezone
 date_default_timezone_set('Europe/Rome');

 echo date('G:i:s');


 $town= 'Torino';
$region= 'Piemonte';
echo '<br>';
echo $town. 'è il capoluogo del' . $region; 

 //Es8
 echo '<br>';
 define('IVA', 22);
 $costo=40;
 $costo_ivato= $costo+ $costo+IVA/22;

echo 'il prodotto costa '. $costo.' euro + IVA' .IVA.'% per un totale di '. $costo_ivato;


 //9
echo __DIR__ . '<br>';
echo __FILE__ . '<br>';
echo __LINE__ . '<br>'; 

 //10

 $i= 12;

echo $i;
echo '<br>';

 $i++;

echo $i;
