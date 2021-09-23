class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(valor > this._saldo) {
            console.log('Saldo insuficiente');
            return;
        }
        this._saldo -= valor;
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ella";
cliente1.cpf = 12322233309;

const cliente2 = new Cliente();
cliente2.nome = "Wendel";
cliente2.cpf = 11122233309;

const contaCorrenteWendel = new ContaCorrente();
contaCorrenteWendel.agencia = 1201;
contaCorrenteWendel._saldo = 100;
contaCorrenteWendel.depositar(100);

const contaCorrenteElla = new ContaCorrente();
contaCorrenteElla.agencia = 1301;
contaCorrenteElla._saldo = 100;
contaCorrenteElla.depositar(100);

console.log(contaCorrenteWendel);
console.log(contaCorrenteElla);