function canEscape(array, position, memo){
    let value = false;
    if(memo[position]){
        return memo[position]
    }
    const nextMaxPosition = position + array[position] 
    if(nextMaxPosition >= array.length)
        return true
    
    for(let i=position+1 ; i <= nextMaxPosition; i++){
        if(array[i] > 0)
            canEscape(array,i, memo)?value=true:null
    }    
    memo[position] = value
    return value
}


function memoizedCanEscape (array){
    let memo = []
    return canEscape(array, 0, memo)
}


//Test
const towers = [4,2,0,0,2,0]
console.log('Can escape? - ' + memoizedCanEscape(towers))
const towers2 = [1,4,3,4,2,1,1,1,3,2,4,7,0]
console.log('Can escape? - ' + memoizedCanEscape(towers2))