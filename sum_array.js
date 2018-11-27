// numbers a list of int
// k an int
// return true if there are two numbers that adds to k in numbers, false otherwise
const hasSumToK = (numbers, k) => {
    if(numbers.length < 2){
        return false
    }
    const set = new Set()
    for(let i = 1; i<numbers.length; i++){
        if(set.has(numbers[i]))
            return true
        set.add(k-numbers[i])
    }
    return false
}

console.log(hasSumToK([1,2,4,5,7,9,10], 15))
console.log(hasSumToK([1,2,4,5,7,9,10], 20))