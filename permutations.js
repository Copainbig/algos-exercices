//O(n*n!)
const permutationsWithoutRepetion = (str) => {
    if (str.length < 2)
        return str
    let result = []
    for(let i=0; i < str.length; i++){
        let head = str[i]
        let remaining = str.slice(0,i) + str.slice(i+1)
        for(let subPermutation of permutationsWithoutRepetion(remaining))
            result.push(head+subPermutation)
    }

    return result
}
/*

    Permutations without repetition

    We have N different elements to pick from.
    We have to choose R elements.
    Repetition is not allowed && order matters

    possibilities : N! / (N-R)!

*/

const permutWithoutRepetitions = (array) => {
    if(array.length <= 1)
        return array
    let result = []
    array.forEach((element, index) => {
        let head = array.slice(index, index+1)
        let remaining = array.slice(0,index).concat(array.slice(index+1))
        let leftPermutations = permutWithoutRepetitions(remaining)
        leftPermutations.forEach(elt => result.push(head.concat(elt)))
    });    

    return result
}

const permutWithoutRepetitionsWithLength = (array, length) => {
    if(length === 1)
        return array.map(elt => [elt])
    
    let result = []
    array.forEach((elt, index) => {
        let head = elt;
        let remaining = array.slice(0,index).concat(array.slice(index+1))
        let subPermutations = permutWithoutRepetitionsWithLength(remaining, length -1 )
        subPermutations.forEach(element => {
            result.push([head].concat(element))
        })
    })

    return result
}

/*
    Permutations with repetitions
    We have N elements to pick from
    We have to pick R.
    Repetition is allowed && order matters


    We have N^R possibilities
*/
const permutWithRepetitions = (array, length) => {
    if(length === 1){
        return array.map(elt => [elt])
    }

    let result = []
    array.forEach( elt => {
        subPermutations = permutWithRepetitions(array, length-1)

        subPermutations.forEach(element => {
            result.push([elt].concat(element))
        })
    })

    return result
}


//TEST
//const test = '1234'
//console.log(permutations(test))

const friends = ['Victor', 'Nico', 'Géraldine', 'Mathilde']
const lockNumbers = [1,2,3]
console.log('>> PERMUTATIONS WITH REPETITIONS : ')
console.log(permutWithRepetitions(lockNumbers,3))
console.log('Example : we got a lock with '+lockNumbers.length+' possible numbers and a 3 number permutation to unlock it.')
console.log('We have '+ permutWithRepetitions(lockNumbers,3).length+' possibilities')


console.log('>> PERMUTATIONS WITHOUT REPETITIONS : ')
console.log(permutWithoutRepetitions(friends))
console.log('Example : we got '+ friends.length+' friends competing in a race. The finishing order has '+permutWithoutRepetitions(friends).length+ ' possibilities.')

console.log('>> PERMUTATIONS WITHOUT REPETITIONS WITH LENGTH: ')
console.log(permutWithoutRepetitionsWithLength(friends, 2))
console.log('Example : we got '+ friends.length+' friends competing in a race. Only the 2 first places matter...')
console.log('The finishing order has '+permutWithoutRepetitionsWithLength(friends,2).length+ ' possibilities.')

