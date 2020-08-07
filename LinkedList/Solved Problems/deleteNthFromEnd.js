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
    
    removeFrom(index){
        let prevNode;
        let node = this.head;
        let k = 1;
        if(index == 1){
            this.head = node.next;
            return;
        }
        
        while(node.next != null && k != index){
            prevNode = node;
            node= node.next;
            k++;
        }
        if(node.next!=null){
            prevNode.next = node.next;
        }
        else prevNode.next = null;
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
let len = +userInput[0] - value + 1;
nodes1.removeFrom(len)
console.log(nodes1.toArray().join(' '));
}); 
