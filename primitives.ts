class IntegerImpl extends Number {
    constructor(num: number) {
        if (!Number.isInteger(num)) {
            throw new TypeError("Only integers are allowed");
        }

        if (num > 2147483647) {
            throw new TypeError("Maximum integer size exceeded");
        }

        super(num);
    }
}
type Integer<N extends number> =
  N extends 0 ? 0 :
  number extends N ? never :
  `${N}` extends `${infer F}${"."}${infer L}` ?
  never : N

function int<T extends number>(num: T) {
    const value = new IntegerImpl(num);
    return value as Integer<typeof num>
}

export { int }