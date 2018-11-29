
function reverse(array){
    if(!array)
        return null
    const max = Math.floor(array.length/2)
    console.log(max)
    for(let i=0; i < max; i++){
        const tmp = array[array.length - i -1]
        array[array.length - i - 1] = array[i]
        array[i] = tmp
    }

    return array
}



//TEST
const array1 = [1,2,3,4,5]
const array2= [1,2,3,4]
console.log(reverse(array1))
console.log(reverse(array2))