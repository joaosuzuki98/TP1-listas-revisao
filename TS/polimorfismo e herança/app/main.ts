import * as readline from 'readline'
import Somador from './aritmetica/Somador'
import Subtrador from './aritmetica/Subtrador'
import Multiplicador from './aritmetica/Multiplicador'
import Divisor from './aritmetica/Divisor'
import Radiciador from './aritmetica/Radiciador'
import Potenciador from './aritmetica/Potenciador'
import Bhaskara from './aritmetica/Bhaskara'

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Quais são os números e a operação desejada?\n", (valor) => {
    let instrucoes = valor.split(' ')
    let numero1 = Number(instrucoes[0])
    let numero2 = Number(instrucoes[1])
    let operacao = instrucoes[2]

    if (instrucoes.length == 1) {
        operacao = instrucoes[0]
    }

    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    let calculo: any
    switch (operacao) {
        case 'somar':
            calculo = new Somador()
            console.log(`O resultado é ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'subtrair':
            calculo = new Subtrador()
            console.log(`O resultado é ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'multiplicar':
            calculo = new Multiplicador()
            console.log(`O resultado é ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'dividir':
            calculo = new Divisor()
            console.log(`O resultado é ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'radiciação':
            calculo = new Radiciador()
            console.log(`O resultado é ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'potenciação':
            calculo = new Potenciador()
            console.log(`O resultado é ${calculo.calcular(numero1, numero2)}\n`)
            break;
        case 'bhaskara':
            const a = Number(instrucoes[0])
            const b = Number(instrucoes[1])
            const c = Number(instrucoes[2])
            const bhaskara = new Bhaskara()
            const resultado = bhaskara.calcularRaizes(a, b, c)
            console.log(`Resultado: ${Array.isArray(resultado) ? resultado.join(' e ') : resultado}\n`)
            break;
        case 'sair':
            console.log('Até mais\n')
            leitor.close()
            break;
        default:
            console.log('Operação inválida\n')
    }
})