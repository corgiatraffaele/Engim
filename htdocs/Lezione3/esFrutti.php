<?php

//Esercizio Array

echo '<pre>';

$frutta=['mela','pera','banana'];

echo $frutta['1'].'<br>';



$frutti=['mela'=>'giallo',
            'pera'=>'verde',
            'banana'=>'giallo'];


$frutti['nocciola']='marrone';

print_r($frutti);

$nome='pera';

echo 'il colore di ' .$nome. ' è '.$frutti[$nome] .'<br>';

