import Calculo from "./Calculo"

export default class Multiplicador extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 * numero2
    }
}