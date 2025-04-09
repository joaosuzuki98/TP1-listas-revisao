function Cliente(nome, telefoneCelular, email, endereco) {
	this.nome = nome
	this.telefoneCelular = telefoneCelular
	this.email = email
	this.endereco = endereco

	Object.defineProperty(this, 'getNome', {
		get: () => this.nome
	})
	Object.defineProperty(this, 'setNome', {
		set: (valor) => this.nome = valor
	})

	Object.defineProperty(this, 'getNomeMaiusculo', {
		get: () => this.nome.toUpperCase()
	})
	Object.defineProperty(this, 'getNomeMinusculo', {
		get: () => this.nome.toLowerCase()
	})

	Object.defineProperty(this, 'getTelefoneCelular', {
		get: () => this.telefoneCelular
	})
	Object.defineProperty(this, 'setTelefoneCelular', {
		set: (valor) => this.telefoneCelular = valor
	})

	Object.defineProperty(this, 'getEmail', {
		get: () => this.email
	})
	Object.defineProperty(this, 'setEmail', {
		set: (valor) => this.email = valor
	})

	Object.defineProperty(this, 'getEmailMaiusculo', {
		get: () => this.email.toUpperCase()
	})

	Object.defineProperty(this, 'getEmailMinusculo', {
		get: () => this.email.toLowerCase()
	})

	Object.defineProperty(this, 'getEndereco', {
		get: () => this.endereco
	})

	Object.defineProperty(this, 'setEndereco', {
		set: (valor) => this.endereco = valor
	})

	Object.defineProperty(this, 'descricao', {
		get: () => `
-------------------------------------------------------
Informações do Cliente:
${this.nome}
-------------------------------------------------------

-------------------------------------------------------
Telefone:
DDD: ${this.telefoneCelular.ddd}
Número: ${this.telefoneCelular.numero}
-------------------------------------------------------
Endereço:
Rua: ${this.endereco.rua}
Número: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
		`
	})
}

function TelefoneCelular(ddd, numero) {
	this.ddd = ddd
	this.numero = numero

	Object.defineProperty(this, 'getDdd', {
		get: () => this.ddd
	})
	Object.defineProperty(this, 'setDdd', {
		set: (valor) => this.ddd = valor
	})

	Object.defineProperty(this, 'getNumero', {
		get: () => this.numero
	})
	Object.defineProperty(this, 'setNumero', {
		set: (valor) => this.numero = valor
	})
}

function Endereco(estado, cidade, rua, numero) {
	this.estado = estado
	this.cidade = cidade
	this.rua = rua
	this.numero = numero

	Object.defineProperty(this, 'getEstado', {
		get: () => this.estado
	})
	Object.defineProperty(this, 'setEstado', {
		set: (valor) => this.estado = valor
	})

	Object.defineProperty(this, 'getEstadoMaiusculo', {
		get: () => this.estado.toUpperCase()
	})
	Object.defineProperty(this, 'getEstadoMinusculo', {
		get: () => this.estado.toLowerCase()
	})

	Object.defineProperty(this, 'getCidade', {
		get: () => this.cidade
	})
	Object.defineProperty(this, 'setCidade', {
		set: (valor) => this.cidade = valor
	})

	Object.defineProperty(this, 'getCidadeMaiusculo', {
		get: () => this.cidade.toUpperCase()
	})
	Object.defineProperty(this, 'getCidadeMinusculo', {
		get: () => this.cidade.toLowerCase()
	})

	Object.defineProperty(this, 'getRua', {
		get: () => this.rua
	})
	Object.defineProperty(this, 'setRua', {
		set: (valor) => this.rua = valor
	})

	Object.defineProperty(this, 'getRuaMaiusculo', {
		get: () => this.rua.toUpperCase()
	})
	Object.defineProperty(this, 'getRuaMinusculo', {
		get: () => this.rua.toLowerCase()
	})

	Object.defineProperty(this, 'getNumero', {
		get: () => this.numero
	})
	Object.defineProperty(this, 'setNumero', {
		set: (valor) => this.numero = valor
	})
}

function OrdenaClientes() {
	this.clientes = []
	Object.defineProperty(this, 'adicionaCliente', {
		set: (cliente) => {
			this.clientes.push(cliente)
			this.clientes.sort((a, b) => a.nome.localeCompare(b.nome))
		}
	})

	Object.defineProperty(this, 'mostraClientesOrdenados', {
		get: () => this.clientes
	})
}

let telefone = new TelefoneCelular('11', '999999999')
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)
let cliente2 = new Cliente('Zézinho', telefone, 'zezin@app.com', endereco)
let cliente3 = new Cliente('Abobalhado', telefone, 'abobalhado@app.com', endereco)

console.log(cliente.descricao)

let clientes = new OrdenaClientes()
clientes.adicionaCliente = cliente
clientes.adicionaCliente = cliente2
clientes.adicionaCliente = cliente3

console.log(clientes.mostraClientesOrdenados)