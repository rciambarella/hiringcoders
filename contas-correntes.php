<?php
// array associativo, mapa indice mapeado cada indive c/ seu conteudo
$contasCorrentes =
    [
    '123.456.789-10' => [
        'titular' => 'Vinicius',
        'saldo' => 1000.00
    ],
    '456.789.123-20' => [
        'titular' => 'Maria',
        'saldo' => 10000.00
    ],
    '789.456.123-30' => [
        'titular' => 'Alberto',
        'saldo' => 300.00
        ]
    ];
$contasCorrentes['654.987.321-40'] =
    [
        'titular' => 'Claudionora',
        'saldo' => 50000.00
    ];

foreach ($contasCorrentes as $cpf => $conta)
{
    echo "CPF: " .$cpf . " titular: ";
    echo $conta['titular'] . PHP_EOL;
}
