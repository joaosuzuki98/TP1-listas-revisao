import Descritor from "./Descritor"
import Empresa from "./Empresa"
import Endereco from "./Endereco"
import Funcionario from "./Funcionario"
import Telefone from "./Telefone"

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let telefone = new Telefone('011', '9-9999-9999')
let funcionario = new Funcionario('Goku da Silva Jr.', '123456789', '999.999.999.99', endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa('ABC LTDA', 'Mercado online', '999-999-999-999-99', endereco, funcionarios, telefones)

let descritor = new Descritor()
console.log(descritor.descrever(empresa))