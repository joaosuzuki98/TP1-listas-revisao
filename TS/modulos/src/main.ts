import { Somar, Dividir, Multiplicar, Subtrair } from "./aritmetica"

const soma = new Somar()
const divisao = new Dividir()
const subtracao = new Subtrair()
const multiplicacao = new Multiplicar()

console.log(
    `
        Soma: ${soma.calcular(2, 2)}
        Divisão: ${divisao.calcular(2, 2)}
        Subtração: ${subtracao.calcular(2, 2)}
        Multiplicação: ${multiplicacao.calcular(2, 2)}
    `
)