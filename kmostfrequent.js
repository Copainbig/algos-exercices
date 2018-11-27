// https://www.youtube.com/watch?v=EYFcQRwcqk0

const elementsFrenquency = (arr, k) => {
    // Store the frequency of every value in a map : 'value' -> 'frequency'
    let map = new Map ()
    arr.forEach( elt => {
        map.set(elt, map.get(elt)? map.get(elt)+1 : 1)
    })

    //var mapAsc = new Map([...map.entries()].sort()); EASY WAY


    //Store each frequency in an array : frequencies[frequencie] = [values]
    let frequencies = new Array(arr.length+1)
    map.forEach((value,key) => {
        if(!frequencies[value]){
            frequencies[value] = [key]
        }else{
            frequencies[value].push(key)
        }
    })


    //Create a table of length k, pushing in it values from frequencies, starting at the end
    let result = []
    let i = frequencies.length-1
    while(result.length < k && i > 0){
        if(frequencies[i])
            result = result.concat(frequencies[i])
        i--
    }

    return result.slice(0,k)
}

const tab =[1,6,2,1,6,1]

console.log(elementsFrenquency(tab, 2))
//console.log(elementsFrenquency(tab, 3))