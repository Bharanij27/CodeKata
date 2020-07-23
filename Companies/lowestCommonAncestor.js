// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    class BST{
    
    constructor(data){
        this.left = this.right = undefined;
        this.value = data;
    }
    
    insertNode(data, head){
        if(head == undefined) return new BST(data);
        else{
            if(head.value > data) head.left =  this.insertNode(data, head.left);
            else if(head.value < data) head.right =  this.insertNode(data, head.right);
            return head;
        }
    }
    
    ancestor(head, data, res)
    {
        if(head == undefined) return null;
        else{
            if(head.value == data) return res.push(+data)
            else if(head.value > data) {
                res.push(head.value)
                this.ancestor(head.left, data, res);
            }
            else if(head.value < data) {
                res.push(head.value)
                this.ancestor(head.right, data, res);
            }
            return res
        }
    }
}

let data = userInput[1].split(' ');
let tree = new BST(+data[0]);

for(let i=1; i<data.length; i++){
    tree.insertNode(+data[i], tree);
}

let node = userInput[2].split(' ');
let res =tree.ancestor(tree, node[0], [])
for(let i = 1; i < node.length; i++){
    let anches = tree.ancestor(tree, node[i], []);
    res = res.filter(data => anches.includes(data));
}
console.log(res[res.length-1])
});