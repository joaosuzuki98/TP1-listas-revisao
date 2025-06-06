import { Cliente, Telefone, Empresa, Endereco } from "../modulo/modelo.js"

const endereco1 = new Endereco("SP", "São Paulo", "Av. Paulista", 1000)
const endereco2 = new Endereco("RJ", "Rio de Janeiro", "Rua das Laranjeiras", 200)

const tel1 = new Telefone("11", "987654321")
const tel2 = new Telefone("21", "998877665")

const cliente1 = new Cliente("João Silva", "12345678900", endereco1)
cliente1.telefones.add(tel1);
cliente1.telefones.add(tel2);

const cliente2 = new Cliente("Maria Oliveira", "98765432100", endereco2)
cliente2.telefones.add(tel2);

const empresa = new Empresa("Tech Solutions Ltda", "TechSol", "11223344556677", endereco1)
empresa.clientes.add(cliente1)
empresa.clientes.add(cliente2)

console.log(empresa.detalhe())
