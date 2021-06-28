<?php
/*
function adiciona2 ($x)
{
    return $x + 2;
}

$resultado = adiciona2(10);
echo PHP_EOL;
echo 'o resultado é: ' . $resultado;
exit();
*/

require 'funcoes.php';

$contasCorrentes =
    [
        '123.456.789-10' => [
            'titular' => 'Vinicius Jotas',
            'saldo' => 1000.23
        ],
        '456.789.123-20' => [
            'titular' => 'Maria Piladelfias',
            'saldo' => 2400.33
        ],
        '789.456.123-30' => [
            'titular' => 'Alberto Guilhiano',
            'saldo' => 300.18
        ]
    ];

$contasCorrentes['456.789.123-20'] = sacar($contasCorrentes['456.789.123-20'], 500.00);
$contasCorrentes['123.456.789-10'] = sacar($contasCorrentes['123.456.789-10'], 233.11);
$contasCorrentes['789.456.123-30'] = depositar($contasCorrentes['789.456.123-30'], 3112.55);


titularComLetrasMaiusculas($contasCorrentes['123.456.789-10']);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>CONTAS CORRENTES</h1>
    <dl>
        <?php foreach($contasCorrentes as $cpf => $conta) { ?>
        <dt>
            <h3>NOME : <?= $conta['titular']; ?> *** CPF: <?= $cpf;?> ***</h3>
        </dt>
        <dd>
            SALDO: <?= $conta['saldo']; ?>
        </dd>
        <?php } ?>
    </dl>

</body>
</html>
