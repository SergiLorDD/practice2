
export default function getPolynomial(...coefficients) {
    let index = -1
    let result = coefficients.reduceRight((sum, num) => {
        index++
        if(num === 0) return sum;
        if(num > 0) num = `+${num}`
        else num = num.toString()
        if(index < 1) return num+sum
        if(index === 1) return `${num !== '+1' ? num : ''}*x`+sum
        return `${num !== '+1' ? num : ''}*x^${index}`+sum
    }, '')
    if(result[0] === '*' || result[0] === '+') result = result.slice(1)
    return result || '0' 
}