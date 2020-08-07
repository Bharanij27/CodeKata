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
    
    removeNode(data){
        let nodes = this.head;
        let last = null, prev = null;
        while(nodes){
            if(nodes.next && nodes.next.value == data){
                prev = nodes;
                last = nodes.next;
            }
            nodes = nodes.next 
        }
        prev.next = last.next;
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

let arr = userInput[1].split(' ');
let nodes = new linkedList();
arr.forEach(data => nodes.add(+data));
let k = +userInput[2];
nodes.removeNode(+k);
console.log(nodes.toArray().join(' '))
});
