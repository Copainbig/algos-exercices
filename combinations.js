/*

IN COMBINATIONS : ORDER DOESN'T MATTER

Combination of elements of N different kind, in a k set.
For example, 5 letters (N) : A , B , C , D , E
in a set of 3  (k): ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE

how many combinations? N! / k!(N-k)!

in this example : 5! / 3!(N-K)! = 120 / 6*2 = 10

*/

//example of combination without repetitions : friends at a table
function combineWithoutRepetitions(friends, table_size) {
    if(table_size === 1)
        return friends.map(elt => [elt])

    let result = []
    friends.forEach((elt, index) => {
        const remaining = friends.slice(index+1)
        const leftCombinations = combineWithoutRepetitions(remaining, table_size - 1)

        leftCombinations.forEach(combination => {
            result.push([elt].concat(combination))
        })
    })
    
    return result
}

/*
    Combinations : ORDER DOESN'T MATTER
    we can choose from N different items
    we choose R of them.

    If repetitions are allowed we got Y different combinations with :
    Y = (R + N - 1)! / (R! (N - 1)!)

*/

function combineWithRepetitions(set, length){

}



//TEST
const friends = ['Victor', 'Nico', 'Géraldine', 'Mathilde', 'Crilou', 'Lucas']
console.log( ' >> COMBINATIONS WITHOUT REPETITIONS ')
console.log(combineWithoutRepetitions(friends, 2))
console.log('if we got ' + friends.length + ' friends, and a '+ 2 +' sized table, we have '+ combineWithRepetitions(friends,2).length + 'possible combinations')

console.log( ' ------------------------ ')
console.log( ' >> COMBINATIONS WITH REPETITIONS ')

