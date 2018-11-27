//Serialize and Deserialize a binary tree

function Node(data, left=null, right=null) { 
    this.data = data; 
    this.left = left; 
    this.right = right; 
} 
// SERIALIZATION
const treeToString = (root, output, empty) => {
    if(root){
        output.push(root.data)
        treeToString(root.left, output, empty)
        treeToString(root.right, output, empty)
    }else{
        output.push(empty)
    }
    return output.join()
}

const serialize = (root) => {
    let output = []
    const empty = '#'
    return treeToString(root, output, empty)
}

//DESERIALIZATION
var deserialize = function(data) {
	 
   data = data.split(',')
   let index = 0
   function deserializer(data){
       if(index>=data.length || data[index] === '#')
            return null
        let node = new Node(parseInt(data[index]))
        index++
        node.left = deserializer(data)
        index++
        node.right = deserializer(data)
        return node  
   }
   return deserializer(data)
};


//Test
let left = new Node(6, new Node(3,null,null), null)
let right = new Node(4, new Node(4,null,null), new Node(5,null,null))
let root = new Node(10, left, right)

console.log(JSON.stringify(root))

const serialized = serialize(root)
console.log(serialized)
console.log(deserialize(serialized))

