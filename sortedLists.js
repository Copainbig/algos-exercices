//K list of N elements. Give a sorted list of the K*N elements

const Heap = require('./MaxHeap')

//arrays contains K arrays of length N
const mergeAndSort = (arrays) => {
    let result = []
    let positions = new Array(arrays.length).fill(0)
    let N = arrays[0].length
    let K = arrays.length
 
    while(result.length < (K*N)){
        let min = findMin(arrays);// faut changer ça fdp, tu tiens pas compte de positions
        console.log(min)
        result.push(min[0])
        positions[min[1]]+=1
        if(positions[min[1]] >= N){
            positions = positions.slice(0,min[1]).concat(positions.slice(min[1]+1))
            arrays = arrays.slice(0,min[1]).concat(arrays.slice(min[1]+1))
        }
        
    }



    return result
}

const findMin = (arrays) => {
    let min = [arrays[0][0],0]
    for(let i = 1; i<arrays.length; i++){
        if(min[0] < arrays[i][0]){
            min = [arrays[i][0], i]
        }
    }  
    return min
}

//TEST
const arrays = [[1,2,3,4,5,6],
                [3,7,9,110,1000,1400],
                [0,4,234,600,601,602]]
            
console.log(mergeAndSort(arrays))