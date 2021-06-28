<?php

require_once 'Conta.php';
require_once 'titular.php';
require_once 'cpf.php';

$vinicius = new Titular(new CPF ('987.654.321-81'),'Vinicius Joaquim');
$primeiraConta = new Conta($vinicius);
$magalhaes = new Titular(new CPF ('123.456.789-33'), 'Magalhães Pintozivich');
$segundaConta = new Conta($magalhaes); //
var_dump($primeiraConta, $segundaConta);

$terceiraConta = new Conta(new Titular( new CPF ('999.444.777-10'), 'Malucos Covids')); // teste da function __destruct
unset($terceiraConta);

$primeiraConta->depositar(511.26);
$primeiraConta->sacar(300.13);

$segundaConta->depositar(811.26);
$segundaConta->sacar(400.13);

$primeiraConta->transferir(181.13, $segundaConta);

echo PHP_EOL;
echo $primeiraConta->recuperarNomeTitular() . ' *** ';
echo $primeiraConta->recuperarCpfTitular() . ' *** ';
echo $primeiraConta->recuperarSaldo();
echo PHP_EOL;
echo PHP_EOL;
echo $segundaConta->recuperarNomeTitular() . ' *** ';
echo $segundaConta->recuperarCpfTitular() . ' *** ';
echo $segundaConta->recuperarSaldo();
echo PHP_EOL;
echo "A quantidade de contas abertas foi " . Conta::recuperarQuantidaContas();