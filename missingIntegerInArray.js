/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.
*/

const getFirstMissingPosInt = (array) => {

    let count = array.length-1
    let i = 0
    while(i<count){
        if(array[i] <= 0){
            const tmp = array[i]
            array[i] = array[count]
            array[count] = tmp
            count--
        }
        if(array[i]>0)
            i++
    }
    count ++

    for(let i=0; i < count; i++){
        if(Math.abs(array[i]) <= count){
            let index = Math.abs(array[i]) -1
            if(array[index] > 0)
                array[index] *= -1
        }
    }

    for(let i=0; i <= count; i++){
        if(array[i] > 0)
            return i+1
    }

    return count +1
}

const tab = [7,4,2,3,6,1,175,-3,0,0,-19]
const tab1 = [1,1,1]
const tab2 = [1,2,3]
const error = [ 1, 0, -5, -2, -4, -3, 3, 2, 2, 0 ]
console.log('input : ' + tab)
console.log(getFirstMissingPosInt(tab))
console.log('input : ' + tab1)
console.log(getFirstMissingPosInt(tab1))
console.log('input : ' + tab2)
console.log(getFirstMissingPosInt(tab2))
console.log('input : ' + error)
console.log(getFirstMissingPosInt(error))