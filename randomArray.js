function randomize(array){
    let newarray = []
    let i = 0
    let length = array.length
    while(newarray.length < length){
        let position = getRandomPosition(array.length)
        newarray[i] = array[position]
        array = array.slice(0,position).concat(array.slice(position+1))
        i++
    }
    return newarray
}

function getRandomPosition(length){
    return Math.floor(Math.random()*length)
}

function randomizeOpt(array){
    for(let i=0; i<array.length; i++){
        let nextPosition = getRandomPositionBounds(i,array.length)
        swap(array, i, nextPosition)
    }
    return array
}

function swap(array, pos1, pos2){
    const tmp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = tmp
}

function getRandomPositionBounds(start, end){
    return Math.floor(Math.random()*(end-start))+start
}

//Test
const array = [0,1,2,3,4,5,6,7]
console.log(' > NONOPT : ' + randomize(array))
console.log(' > OPT : ' + randomizeOpt(array))