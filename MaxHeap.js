class MaxHeap {

    //O(nlogn)
    constructor(array){
        this.heap=[null]
        for(let i = 0; i< array.length; i++){
            this.insert(array[i])
        }
    }

    //O(logn)
    insert(data){
        this.heap.push(data)
        if(this.heap.length < 3)
            return this.heap
        let currIndex = this.heap.length -1  
        let parentIndex = Math.floor(currIndex/2)
        while(data > this.heap[parentIndex] && parentIndex>0){
            let tmp = this.heap[parentIndex]
            this.heap[parentIndex] = data
            this.heap[currIndex]=tmp

            currIndex = parentIndex           
            parentIndex = Math.floor(currIndex/2)
        }

        return this.heap
    }

    //O(logn)
    removeMax(){
        if(this.heap.length === 1)
            return null
        let max = this.heap[1]
        this.heap[1] = this.heap.pop()
        let currIndex = 1
        let [left, right] = [currIndex*2, currIndex*2+1]
        let childIndex = this.heap[right] && this.heap[right] >= this.heap[left] ? right : left
        while(this.heap[childIndex] && this.heap[childIndex] > this.heap[currIndex]){
            let tmp = this.heap[childIndex]
            this.heap[childIndex] = this.heap[currIndex]
            this.heap[currIndex] = tmp

            currIndex = childIndex
            let [left, right] = [currIndex*2, currIndex*2+1]
            childIndex = this.heap[right] && this.heap[right] >= this.heap[left] ? right : left
        }
        return max
    }

    //(O1)
    getMax(){
        return this.heap[1]
    }
}

module.exports = MaxHeap


let datas = [3,4,2,1,8,10]
const heap = new MaxHeap(datas)
console.log(heap.heap)
console.log(heap.removeMax())
console.log(heap.heap)