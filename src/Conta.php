<?php
// class é a "forma do bolo"
// new Conta() é o novo bolo
// $umaNovaConta = new Conta(); "objeto $umaNovaConta novo bolo

class Conta
{
    // definir dados da conta, private todos os atributos estão privados,
    // qdo private implementar metodos para definir e recuperar o atributo
    private $titular;
    private $saldo = 0;
    private static $numeroDeContasAbertas = 0;

    public function __construct(Titular $titular) // no método construtor somente inicializar o objeto ou instância
    {
        $this->titular = $titular;
        $this->saldo = 0;
        Conta::$numeroDeContasAbertas++; // nome da classe para acessar e incrementar quantidade de contas abertas,
        // na variavel estatitica que acumula soma 1 a cada nova conta abereta
    }

    public function __destruct() //usar para quando a instancia objeto deixa de existi sem utilidade
    {
        self::$numeroDeContasAbertas--;
        /*
         if (self::$numeroDeContasAbertaseContas > 2)
        {
            echo "Há mais de uma conta ativa!!";
        }
        */
    }

    public function sacar(float $valorASacar): void
    {
        if ($valorASacar > $this->saldo)
        // this é a referência
        {
            echo "Saldo indisponível!";
            return;
        }
        $this->saldo -= $valorASacar;
    }
    public function depositar(float $valorADepositar): void
    {
        if ($valorADepositar <= 0)
            {
            echo "Depósito sem valor (Inválido!)!";
            return;
        }
            $this->saldo += $valorADepositar;
    }
    public function transferir(float $valorATransferir, Conta $contaDestino): void
    {
        if ($valorATransferir > $this->saldo)
        {
            echo "Saldo Indísponivel!";
            return;
        }
        $this->sacar($valorATransferir);
            $contaDestino->depositar($valorATransferir);
    }

    public function recuperarNomeTitular(): string
    {
        return $this->titular->recuperarNome();
    }

    public function recuperarCpfTitular(): string
    {
        return $this->titular->recuperarCpf();
    }

    public function recuperarSaldo(): float
    {
        return $this->saldo;
    }

    public static function recuperarQuantidaContas(): int
    {
        return Conta::$numeroDeContasAbertas;
    }
}
