function decode(data, i, memo){
    if(memo[i])
        return memo[i]
    let sum = 0

    if(i === data.length)
        return 1

    if(data[i]!= '0'){
        sum+=decode(data, i+1, memo)
        if((data.length-i)>=2 && parseInt(data.substring(i,i+2)) < 27)
            sum+=decode(data, i+2,memo)
    }
    memo[i]=sum
    return sum    
}

function decodeMemoized(data){
    let memo = []
    return decode(data,0,memo)
}
//TEST
const test = "123"
console.log(decodeMemoized(test))

const test2 = "5617192310"
console.log(decodeMemoized(test2))
