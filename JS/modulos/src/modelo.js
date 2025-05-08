class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf () {
        return this.#cpf
    }

    set cpf (value) {
        this.#cpf = value
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cpf () {
        return this.#cnpj
    }

    set cpf (value) {
        this.#cnpj = value
    }

    detalhe() {
        return `
Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
-------------------------------------------------------------------------------
${
    Array.from(this.clientes).map(cliente => (
        `
Nome: ${cliente.nome}
Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} número: ${cliente.endereco.numero}
        ${
            Array.from(cliente.telefones).map(telefone => (
                `
ddd: ${telefone.ddd} número: ${telefone.numero}
                `    
            ))
        }
        `
    ))
}
        `
    }
}

export { Cliente, Telefone, Endereco, Empresa }