function pushZeroToEnd(array){
    for(let i=0; i<(array.length-1); i++){
        if(array[i]===0){
            let j=i+1
            while(array[j] === 0 && j < array.length){
                j++
            }
            if(j === array.length)
                return array
            swap(array,i,j)    
        }
    }

    return array
}

function swap(array, pos1, pos2){
    let tmp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = tmp
}

//TEST
const array = [1,3,0,0,23,5,0,4,2,0,2]
console.log(pushZeroToEnd(array))