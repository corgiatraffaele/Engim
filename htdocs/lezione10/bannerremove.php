<?php
//devo segnare la richiesta dell'utente
//costuisco un array di banner per ogni cliente e gli consento di 
//toglierli


//definisco un array che contiene tutti gli indici possibili
$id = $_GET['id'];

if($_SESSION['valid_ids']){

    $_SESSION['valid_ids']=[0,1,2,3,4,5];
}



unset($_SESSION['valid_ids'][$id]);


$_SESSION['valid_ids']=array_filter($_SESSION['valid_ids']);
//memorizzo il valore indicato dall'utente




//lo riporto nella pagina principale
header('location:page.php');