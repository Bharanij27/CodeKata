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
class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class linkedList{

    constructor(){
        this.head = null;
    }

    add(data){
        if(this.head == null) this.head = new Node(data);
        else{
            let node = this.head;
            while(node.next != null){
                node = node.next;
            }
            node.next = new Node(data);
        }
    }
    
    delete(nodes, value){
        let prevNode = null;
        let allNodes = nodes;
 
        while(nodes.value != value){
            prevNode = nodes;
            nodes = nodes.next;
        } 
 
        if(prevNode == null) return nodes.next;
        else if(nodes.next!=null) prevNode.next = nodes.next;
        else prevNode.next = null;
        return allNodes;
    }

    toArray(){
        let arr = []
        let nodes = this.head;
        while(nodes){
            arr.push(nodes.value);
            nodes = nodes.next;
        }
        return arr;
    }
}

let num = userInput[1].split(' ');
let nodes1 = new linkedList();
let value = +userInput[2];

num.forEach(data => nodes1.add(+data));
nodes1.delete(nodes1.head, value)
console.log(nodes1.toArray().join(' '));
});
