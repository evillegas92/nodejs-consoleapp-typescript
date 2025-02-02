class MyMath {
    static calculateLeastCommonMultiple(a: number, b: number) {
        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            throw "All numbers must be positive integers";
        }
        const nominator = Math.abs(a*b);
        try {
            const gcd = this.#greatestCommonDivisor(a, b);
            return nominator / gcd;
        } catch(error) {
            throw "Error calculating Least Common Multiple";
        }
    }

    /// Euclidean algorithm for calculating Greatest Common Divisor between two numbers.
    static #greatestCommonDivisor(a: number, b: number): number {
        if (isNaN(a) || isNaN(b)) {
            throw "All numbers must be valid integers";
        }
        if (a === 0 && b === 0) {
            throw "At least one of the numbers must be non-cero";
        }
        if (a === b)
            return a;
        if (a === 0)
            return Math.abs(b);
        if (b === 0)
            return Math.abs(a);
        const greatest = a > b ? a : b;
        const least = a < b ? a : b;

        return this.#greatestCommonDivisor(least, greatest % least);
    }
}

export { MyMath };