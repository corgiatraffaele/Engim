<?php
//grazie per la tua richiesta di preventivo per una




if(isset($_POST["scelta"])){
    echo  "Grazie per aver richiesto un preventivo per una <b>".$_POST["scelta"]."</b>";
    if(isset($_POST["assicurazione"])){
        echo "<b> con Assicurazione </b>";
    }
    else{
        echo "<b> senza Assicurazione </b>";
    }
}
else{
    echo "<b> non hai selezionato il mezzo </b>";
    
}