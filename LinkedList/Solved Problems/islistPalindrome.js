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
    
    reverse(){
        let node = this.head;
        if(node.next==null || !node) return;
        let prev = null, nextNode = node, currNode = node;
        while(currNode){
            nextNode = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = nextNode;
        }
        this.head = prev;
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

let arr1 = userInput[1].split(' ');

let nodes1 = new linkedList();
arr1.forEach(data => nodes1.add(data));

let str =  nodes1.toArray().join(' ')
nodes1.reverse();

let str2 =  nodes1.toArray().join(' ')
if(str == str2) console.log('yes');
else console.log('no')
});
