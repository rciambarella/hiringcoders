<?php

function exibeMensagem(string $mensagem)
{
    echo $mensagem . '<br>';
}

function sacar($conta, float $valorASacar) : array
{
    if ($valorASacar> $conta['saldo'])
    {
        exibeMensagem("Você não pode sacar !");
    }else{
        $conta['saldo'] -= $valorASacar;
    }
    return $conta;
}

function depositar($conta, float $valorADepositar) : array
{
    if ($valorADepositar > 0){
        $conta['saldo'] += $valorADepositar;
    }else{
        exibeMensagem("Somente depositar quantias positivas!");
    }

    return $conta;
}

function titularComLetrasMaiusculas(array &$conta) //passagem variavel por referencia & // sem & é passagem por valor
{
    $conta['titular'] = mb_strtoupper($conta['titular']);
}

function exibeConta(array $conta)
{
    ['titular' => $titular, 'saldo' => $saldo] = $conta;
    echo "<li>TITULAR.: $titular . SALDO...: $saldo</li>";
}