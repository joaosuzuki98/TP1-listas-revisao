export default class Bhaskara {
    public calcularRaizes(a: number, b: number, c: number): number[] | string {
        const delta = b ** 2 - 4 * a * c

        if (delta < 0) {
            return "A equação não possui raízes reais"
        }

        const sqrtDelta = Math.sqrt(delta)
        const x1 = (-b + sqrtDelta) / (2 * a)
        const x2 = (-b - sqrtDelta) / (2 * a)

        return [x1, x2]
    }
}
