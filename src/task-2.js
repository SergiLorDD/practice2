
export default function createCounter(n) {
    let counter = 0;
    return function() {
        const beforeCounter = counter;
        counter += n;
        return beforeCounter;
    };
}