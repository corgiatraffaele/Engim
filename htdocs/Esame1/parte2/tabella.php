<?php
session_start();

require('dati.php');
require('intestazione.php')





?>


<form action="tabella.php" method="post"> 
   Ora inizio: <input type="text" name="q">
   ora fine: <input type="text" name="user">
    <br>
    <br>
    
    <input type="submit" value="filtra">
</form>




<table style="border: 10px solid black"> 
     <tr><th >Ora</th>
    <th>Numero di carriole</th>
    <th>Numero di carri</th>
    <th>Numero di cammion</th>
    <th>kg trasportati</th>
</tr>
     </table>
    

<?php
//print_r($trasporti);

foreach($trasporti as $value){

   
    echo "{$trasporti} => {$value}";





}