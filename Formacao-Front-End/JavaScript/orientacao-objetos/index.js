import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Gerente("Wendel", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Diretor("Ella", 12000, 12345678901);
gerente.cadastrarSenha("123");
const cliente = new Cliente("João", 12345678902, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(clienteEstaLogado);