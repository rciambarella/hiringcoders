<?php

$idades = [21,23,19,21,30,25, 41,18,06,28,94];

echo count($idades) , PHP_EOL;

for ($i=0; $i<count($idades); $i++)
{
    echo "numero: $idades[$i]" . PHP_EOL;
}

$idadeVs = [21,23,19,21,30,25,41,18,06,28,94];
$idadeVs[] = 400;
$idadeVs[] = 320;
$idadeVs[] = 360;

foreach ($idadeVs as $idade) {
    echo $idade . PHP_EOL;
}
