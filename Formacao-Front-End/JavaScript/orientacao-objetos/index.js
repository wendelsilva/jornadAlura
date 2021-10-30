import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente("Ella", 12345678910);
//cliente1.nome = "Ella";
//cliente1.cpf = 12322233309;

const cliente2 = new Cliente("Wendel", 11122233309);
//cliente2.nome = "Wendel";
//cliente2.cpf = 11122233309;

const contaCorrenteWendel = new ContaCorrente(1201, cliente2);
//contaCorrenteWendel.agencia = 1201;
contaCorrenteWendel._saldo = 200;
//contaCorrenteWendel._cliente = cliente2;
contaCorrenteWendel.depositar(500);

const contaCorrenteElla = new ContaCorrente(1301, cliente1);
//contaCorrenteElla.agencia = 1301;
contaCorrenteElla._saldo = 200;
//contaCorrenteElla._cliente = cliente1;
contaCorrenteElla.depositar(100);

//let valorTransferencia = 200;
//contaCorrenteWendel.transferir(valorTransferencia, contaCorrenteElla);

console.log(contaCorrenteWendel);
console.log(contaCorrenteElla);
console.log(ContaCorrente.numeroDeContas);