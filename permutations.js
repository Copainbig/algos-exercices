//O(n*n!)
const permutations = (str) => {
    if (str.length < 2)
        return str
    let result = []
    for(let i=0; i < str.length; i++){
        let head = str[i]
        let remaining = str.slice(0,i) + str.slice(i+1)
        for(let subPermutation of permutations(remaining))
            result.push(head+subPermutation)
    }

    return result
}


const permut = (array) => {
    if(array.length <= 1)
        return array
    let result = []
    array.forEach((element, index) => {
        let head = array.slice(index, index+1)
        let remaining = array.slice(0,index).concat(array.slice(index+1))
        let leftPermutations = permut(remaining)
        leftPermutations.forEach(elt => result.push(head.concat(elt)))
    });    

    return result
}

const test = 'abcd'
//console.log(permutations(test))

const friends = ['Victor', 'Lucas', 'Nico', 'Christophe']
//console.log(permut(friends))


/*

Combination of elements of N different kind, in a k set.
For example, 5 letters (N) : A , B , C , D , E
in a set of 3  (k): ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE

how many combinations? N! / k!(N-k)!

in this example : 5! / 3!(N-K)! = 120 / 6*2 = 10

*/

const combinations = ( array, table_size ) => {
    if(table_size === 1)
        return array.map(elt => [elt])
    if(array.length === table_size)
        return [array]
    if(table_size === 0)
        return []

    let result = []
    for(let i=0; i <= (array.length - table_size); i++ ){
        let head = array.slice(i,i+1)
        let leftCombinations = combinations(array.slice(i+1), table_size -1)
        leftCombinations.forEach( elt => result.push(head.concat(elt)))
    }

    return result
}

console.log(combinations(friends, 2))