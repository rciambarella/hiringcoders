<?php

$idade = 18;
$numeroDePessoas = 2;

echo "Você só pode entrar se tiver a partir de 18 anos ou ";
echo "a partir de 16 anos acompanhado" . PHP_EOL;

if ($idade >= 18){
    echo "Você tem $idade anos! Esta autorizado a entrar sozinho!";
    } else if ($idade >= 16 && $numeroDePessoas > 1)
    {
        echo "Você tem $idade anos! Esta acompanhado! Então, pode entrar c/ acompanhante!";
    } else
    {
        echo " Você só tem $idade anos! Você não esta autorizado a entrar!";
    }

echo PHP_EOL;
echo "nos vemos na próxima!";