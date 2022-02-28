<?php

$banners= [
    ['name' => 'banner1',
    'url'=>'https://www.ibm.com'],

    ['name' => 'banner2',
    'url'=>'https://www.nasa.com'],

    ['name' => 'banner3',
    'url'=>'https://www.lastampa.com'],

    ['name' => 'banner4',
    'url'=>'https://www.ibm.com'],

    ['name' => 'banner5',
    'url'=>'https://www.nasa.com'],

    ['name' => 'banner6',
    'url'=>'https://www.lastampa.com']
];



function get_banner($items){

    $index = rand(0,count($items)-1);

    save_banner_views($index);

    $banner= $items[$index];

    $html='<a href="bannerremove.php?id='.$index ."'>rimuovi!</a><br>'";

    $html='<a href="gotobannerlink.php?id='. $index.'">'. $banner['name'].'</a>';

    return $html;

}


function save_banner_views($index){
        //salvo l'info in un file

        if(!file_exists('count.json')){
            $count=[0,0,0,0,0,0];
            //se il file non esiste crea il file .json con un json inizializzato a [0,0,0...]

        }else {
         $data_string= file_get_contents('count.json');
         $count= json_decode($data_string,1);
        //se esistevai a prendere il file.json e lo trasforma in una stringa
        //json_decode trasforma la nostra stringa in un .json

        }
         $count[$index]++;
            //aumenta il valore del json di uno 

         $out_string=json_encode($count);
        // lo ritrasforma in una stringa

        file_put_contents('count.json',$out_string);
        //lo va a mettere nel file count.json
}



function save_banner_click($index){
    //salvo l'info in un file

    if(!file_exists('count_click.json')){
        $count=[0,0,0,0,0,0];
        //se il file non esiste crea il file .json con un json inizializzato a [0,0,0...]

    }else {
     $data_string= file_get_contents('count_click.json');
     $count= json_decode($data_string,1);
    //se esistevai a prendere il file.json e lo trasforma in una stringa
    //json_decode trasforma la nostra stringa in un .json

    }
     $count[$index]++;
        //aumenta il valore del json di uno 

     $out_string=json_encode($count);
    // lo ritrasforma in una stringa

    file_put_contents('count_click.json',$out_string);
    //lo va a mettere nel file count.json
}










