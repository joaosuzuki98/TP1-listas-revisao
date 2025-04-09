import Calculo from "./Calculo"

export default class Radiciador extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 ** (1 / numero2)
    }
}