<?php

//riceve l'id del banner cliccato dall'utente 
//e memorizza il click su quel banner
//indirizza il banner a quel link
require('banner.php');

$index=$_GET['id'];

//salva il click

save_banner_click($index);

//redirigi il browser;

header('location:'.$banners[$index]['url']);