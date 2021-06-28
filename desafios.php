<?php

echo PHP_EOL;
echo 'Calculo do IMC';
$peso = 85.0;
$altura = 1.75;
$imc = $peso / $altura **2;
echo PHP_EOL;
echo 'Abaixo de 18,5      = magreza         Nível 0' . PHP_EOL;
echo 'Entre 18,5 até 24,9 = normal          Nível 0' . PHP_EOL;
echo 'Entre 25,0 até 29,9 = sobrepeso       Nível 1' . PHP_EOL;
echo 'Entre 30,0 até 39,9 = obesidade       Nível 2' . PHP_EOL;
echo 'Acima de 40,0       = obesidade Grave Nível 3' . PHP_EOL;

if ($imc < 18.5)
{
    echo "Você tem $imc que corresponde a Magreza !";
}
if ($imc >= 18.5 and $imc < 25.0)
{
    echo "Você tem $imc que corresponde a Normal !";
}
if ($imc >= 25.0 and $imc < 29.9)
{
    echo "Você tem $imc que corresponde a Sobrepeso !";
}
if ($imc >= 30.0 and $imc < 39.9)
{
    echo "Você tem $imc que corresponde a obesidade !";
}

if ($imc >= 40.0)
{
    echo "Você tem $imc que corresponde a Obesidade GRAVE !";
}