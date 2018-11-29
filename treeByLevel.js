//https://www.youtube.com/watch?v=P_YMAJWEK3Q

function printTree(tree){
    let queue = []

    console.log(tree.value)
    queue.push(tree.left)
    queue.push(tree.right)
    while(queue[0] != null){
        const tmp = queue.shift()
        console.log(tmp.value)
        queue.push(tmp.left)
        queue.push(tmp.right)
    }
}

function printTreeByLvl(root){
    let queue = []
    queue.push(root)
    let str = ''

    while(queue.length > 0){
        let tmp
        let newQueue = []
        while(tmp = queue.shift()){
            str += tmp.value
            if(tmp.left)
                newQueue.push(tmp.left)
            if(tmp.right)
                newQueue.push(tmp.right)
        }
        queue=newQueue
        str+='\n'
    }
    return str
}




//Test
class Node {
    constructor(value, left, right){
        this.value = value
        this.left = left
        this.right = right
    }
}



const node5 = new Node(5,null,null)
const node4 = new Node(4,null,null)
const node3 = new Node(3,null,null)
const node2 = new Node(2, node5, null)
const node1 = new Node(1, node3, node4)
const root = new Node(0, node1, node2)

console.log(printTree(root))
console.log(' ------- ')
console.log(printTreeByLvl(root))