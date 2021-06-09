
export default function findPath(obj, value = 15) {
    return finding(obj, value)
}

function finding(obj, value){
    for (const key in obj) {
        if(typeof obj[key] === 'object'){
            const findingResult = finding(obj[key], value);
            if(findingResult) return `${key}.${findingResult}`
        }
        if (obj[key] === value) return key
    }
    return null
}