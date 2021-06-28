<?php

class Titular
{
   private $cpf;
   private $nome;

    public function __construct(CPF $cpf, string $nome)
   {
       $this->cpf = $cpf;
       $this->validarNomeTitular($nome);
       $this->nome=$nome;
   }

    public function recuperarCpf(): string
    {
        return $this->cpf->recuperarNumero();
    }
    public function recuperarNome(): string
    {
        return $this->nome;
    }
    private function validarNomeTitular($nomeTitular) //metodo privado, para que ninguem saiba as validações
    {
        if (strlen($nomeTitular) < 5)
        {
            echo "Nome do Titular não pode ser menor que 5 caractes, digitar o sobrenome!";
            exit();
        }
    }

}
