class Cliente { 
	#cpf
    constructor (nome, cpf, endereco) {
		this.nome = nome 
		this.#cpf = cpf 
		this.endereco = endereco 
		this.telefones = new Set()
    }

	get getCpf() {
		return this.#cpf
	}

	getNomeMaiusculo() {
        return this.nome.toUpperCase()
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase()
    }

    getEnderecoMaiusculo() {
        return `${this.endereco}`.toUpperCase()
    }

    getEnderecoMinusculo() {
        return `${this.endereco}`.toLowerCase()
    }

	adicionarTelefone(telefone) {
		this.telefones.add(telefone)
	}
} 
  
class Telefone { 
	constructor (numero, ddd) { 
		this.ddd = ddd 
		this.numero = numero 
	}
} 
  
class Endereco { 
    constructor (estado, cidade, rua, numero) { 
		this.estado = estado 
		this.cidade = cidade 
		this.rua = rua 
		this.numero = numero 
    }
	
	getEstadoMaiusculo() {
		return this.estado.toUpperCase()
	}
	
	getEstadoMinusculo() {
		return this.estado.toLowerCase()
	}
	
	getCidadeMaiusculo() {
		return this.cidade.toUpperCase()
	}
	
	getCidadeMinusculo() {
		return this.cidade.toLowerCase()
	}

	getRuaMaiusculo() {
		return this.rua.toUpperCase()
	}

	getRuaMinusculo() {
		return this.rua.toLowerCase()
	}
}
  
class Empresa {
	#cnpj
	constructor (razaoSocial, nomeFantasia, cnpj, endereco) { 
		this.razaoSocial = razaoSocial 
		this.nomeFantasia = nomeFantasia 
		this.#cnpj = cnpj 
		this.endereco = endereco 
		this.clientes = new Set() 
		this.telefones = new Set() 
	}

	getRazaoSocialMaiusculo() {
		return this.razaoSocial.toUpperCase()
	}

	getRazaoSocialMinusculo() {
		return this.razaoSocial.toLowerCase()
	}

	getNomeFantasiaMaiusculo() {
		return this.nomeFantasia.toUpperCase()
	}

	getNomeFantasiaMinusculo() {
		return this.nomeFantasia.toLowerCase()
	}

	get getCnpj() {
		return this.#cnpj
	}

	adicionarCliente(cliente) {
		this.clientes.add(cliente)
	}
	
	adicionarTelefone(telefone) {
		this.telefones.add(telefone)
	}

	detalhe() {
		return `
			Razão Social: ${this.razaoSocial}
			Nome Fantasia: ${this.nomeFantasia}		
			-------------------------------------------------------------------
	
			Clientes:
			${Array.from(this.clientes).map(cliente => {
				const telefones = Array.from(cliente.telefones)
					.map(tel => `DDD: ${tel.ddd}, Número: ${tel.numero} `)	
				return `
					Cliente: ${cliente.nome}
					Endereço: ${cliente.endereco.estado}, ${cliente.endereco.cidade}, ${cliente.endereco.rua}, ${cliente.endereco.numero}
					Telefones: ${telefones}
				`
			}).join('\n')}
		`
	}
}

const enderecoEmpresa = new Endereco('São Teste', 'Teste dos Campos', 'Avenida Teste da Silva', '73573')
const telefoneEmpresa = new Telefone('12', '123-123')
const empresa = new Empresa('Teste ltda', 'Tests', '123', enderecoEmpresa)

const enderecoCliente = new Endereco('Teste do Sul', 'Testepolis', 'Rua 123', '12')
const telefoneCliente = new Telefone('11', '392-192')
const cliente1 = new Cliente('Teste Jr.', '123', enderecoCliente)
const cliente2 = new Cliente('Teste II', '345', enderecoCliente)

cliente1.adicionarTelefone(telefoneCliente)
cliente1.adicionarTelefone(telefoneEmpresa)
cliente2.adicionarTelefone(telefoneCliente)

empresa.adicionarTelefone(telefoneEmpresa)
empresa.adicionarCliente(cliente1)
empresa.adicionarCliente(cliente2)

console.log(empresa.detalhe())