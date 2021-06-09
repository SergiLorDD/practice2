
export default function sum(...values) {
    return values.reduce((sumValue, item) => sumValue + item, 0)
}
