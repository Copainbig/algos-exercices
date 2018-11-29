function intersection(arr1, arr2){
    result = new Set()
    let idx1 = 0
    let idx2 = 0
    while(idx1 < arr1.length && idx2 < arr2.length){
        if(arr1[idx1] === arr2[idx2]){
            result.add(arr1[idx1])
            idx1++
            idx2++
        }else{
            if(arr1[idx1] === Math.min(arr1[idx1], arr2[idx2])){
                idx1++
            }else{
                idx2++
            }
        }
    }
    return [...result]
}

function intersectionOfK(karrays){
    //use a MinHeap
    //where each node got a value used for priorisation
    //And an other value to remember the list it comes from
    // O(NlogK)
}

const arr1 = [1,3,6,9,10,13]
const arr2 = [2,3,4,5,6,7,8,9]

console.log(intersection(arr1, arr2))