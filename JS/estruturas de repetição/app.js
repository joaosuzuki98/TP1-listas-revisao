const personagens = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo americano",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}`
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Punhos",
        armaSecundaria: "Pés",
        velocidade: 75,
        forca: 95,
        resistencia: 95,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}` 
        }
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura",
        armaSecundaria: "Dinheiro",
        velocidade: 90,
        forca: 70,
        resistencia: 85,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}` 
        }
    }, 
    {
        nome: "Thor",
        codinome: "",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 100,
        forca: 95,
        resistencia: 90,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}` 
        }
    }, 
    {
        nome: "Clint Barton",
        codinome: "Gavião Arqueiro",
        armaPrincipal: "Arco e flecha",
        armaSecundaria: "",
        velocidade: 60,
        forca: 65,
        resistencia: 60,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}` 
        }
    },  
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Armas de fogo",
        armaSecundaria: "",
        velocidade: 65,
        forca: 60,
        resistencia: 60,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}` 
        }
    },  
    {
        nome: "Thanos",
        codinome: "",
        armaPrincipal: "Manopla do infinito",
        armaSecundaria: "Espada",
        velocidade: 75,
        forca: 100,
        resistencia: 80,
        descricao: function() {
            return `Nome do personagem: ${this.nome}\n`
            + `Codinome do personagem: ${this.codinome}\n`
            + `Arma principal: ${this.armaPrincipal}\n`
            + `Arma secundária: ${this.armaSecundaria}\n`
            + `Nível de força: ${this.forca}\n`
            + `Nível de velocidade: ${this.velocidade}\n`
            + `Nível de resistência: ${this.resistencia}` 
        }
    }, 
]

const compararPersonagens = (p1, p2) => {
    console.log(`Comparação entre ${p1.nome}${p1.codinome ? `(${p1.codinome})`: ''} e ${p2.nome}${p2.codinome ? `(${p2.codinome})` : ''}\n`)

    console.log(
        `Armas:\n ${p1.armaPrincipal} ${p1.armaSecundaria ? `+ ${p1.armaSecundaria}` : ''}\n ${p2.armaPrincipal} ${p2.armaSecundaria ? `+ ${p2.armaSecundaria}` : ''}\n`
    )

    let pontoP1 = 0
    let pontoP2 = 0

    const atributos = ['forca', 'velocidade', 'resistencia']

    for (let atributo of atributos) {
        console.log(`${atributo.charAt(0).toUpperCase() + atributo.slice(1)}:\n ${p1[atributo]} X ${p2[atributo]}`)

        if (p1[atributo] > p2[atributo]) {
            pontoP1++
            console.log(`${p1.nome} venceu\n`)
        } else if (p1[atributo] === p2[atributo]) {
            console.log('Empatou!\n')
        } else {
            pontoP2++
            console.log(`${p2.nome} venceu\n`)
        }
    }

    console.log(p1.descricao() + '\n')
    console.log(p2.descricao() + '\n')

    if (pontoP1 > pontoP2) {
        console.log(`O vencedor é ${p1.nome}`)
    } else if (pontoP1 === pontoP2) {
        console.log(`Não há vencedores`)
    } else {
        console.log(`O vencedor é ${p2.nome}`)
    }
}

for (let i = 0; i < personagens.length; i++) {
    for (let j = 1; j < personagens.length; j++) {
        compararPersonagens(personagens[i], personagens[j])
    }
}