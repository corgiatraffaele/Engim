<?php


if (isset($argv[1]) && isset($argv[2]) && is_numeric($argv[1]) && is_numeric($argv[2])) {
    echo "\n";
    $c= $argv[1] + $argv[2];
    echo 'la somma dei tuoi numeri è ' . $c ;
    echo "\n";
} else {

    echo "usage: $argv[0] num1 num2\n";
}


