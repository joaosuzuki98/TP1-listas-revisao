import Calcular from "./calcular"

class Somar extends Calcular{
    calcular(num1: number, num2: number): number {
        return num1 + num2
    }
}

class Subtrair extends Calcular{
    calcular(num1: number, num2: number): number {
        return num1 - num2
    }
}

class Multiplicar extends Calcular{
    calcular(num1: number, num2: number): number {
        return num1 * num2
    }
}

class Dividir extends Calcular{
    calcular(num1: number, num2: number): number {
        return num1 / num2
    }
}

export { Somar, Subtrair, Multiplicar, Dividir }