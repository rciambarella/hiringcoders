<?php
$array = [
    1 => 'ABC',
    '2' => 'DEF',
    3.5 => 'GHI', // FLOAT NÃO PODE SER CHAVE, POIS PHP CONVERTE PARA INTEIRO
    true => 'JKL'
];
foreach ($array as $item)
{
    echo $item . PHP_EOL;
}