function getConflictsFromSorted(calendar){
    let result=[]

    for(let i = 0; i < calendar.length - 1; i++){
        let j=i+1
            while(calendar[j] && calendar[j][0] < calendar[i][1]){
                result.push([calendar[i],calendar[j]])
                j++
            }        
    }

    return result
}

//TEST
const agenda = [[1,6], [2,9], [4,5], [5,6]]
console.log(getConflictsFromSorted(agenda))