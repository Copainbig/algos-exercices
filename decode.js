//https://www.youtube.com/watch?v=qli-JCrSwuk&index=1&list=PLBZBJbE_rGRVnpitdvpdY9952IsKMDuev

//1st approach
const decode = (str) => {
    let result = 0
    if(str.length === 0)
        return 1
    if(str[0] === '0')
        return 0
    if(str.length === 1)
        return 1
    if(parseInt(str.substring(0,2)) < 27)
        return result + decode(str.substring(1)) + decode(str.substring(2))
    return result + decode(str.substring(1))
}

//2nd approach
const decodeHelper = (str, k, memo) => {
    let result = 0
    if (k === 0)
        return 1
    let s = str.length-k
    if(str[s] === '0')
        return 0
    if(memo[k])
        return memo[k]
    result += decodeHelper(str, k-1, memo)
    if(k >=2 && (parseInt(str.substring(0,2)) < 27) )
         result += decodeHelper(str, k-2, memo)
    memo[k] = result
    return result
}

const decodeOpt = (str) => {
    let memo = []
    return decodeHelper(str, str.length, memo)
}

console.log(decode('123'))
console.log(decode('90'))
console.log(decode('12202'))
console.log(decode('11111'))
console.log('-----------')
console.log(decodeOpt('123'))
console.log(decodeOpt('90'))
console.log(decodeOpt('12202'))
console.log(decodeOpt('11111'))