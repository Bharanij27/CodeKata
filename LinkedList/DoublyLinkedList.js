class Node{
    constructor(data){
        this.prev = null, this.next = null;
        this.value = data;
    }
}

class DoubleList{
    constructor(data =null){
        this.head = data;
    }
    add(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
            return;
        }
        
        let nodes = this.head;
        while(nodes.next != null){nodes = nodes.next;}
        nodes.next = newNode;
        newNode.prev = nodes;
    }

    PrintList(){
        let nodes = this.head;
        while(nodes){
            console.log(nodes.prev,"<--",nodes.value,"-->",nodes.next);
            nodes = nodes.next
        }
    }
}

let nodes = new DoubleList();
let arr = [4, 6, 2, 8, 0];
arr.forEach(data => nodes.add(data));
console.log('List');
nodes.PrintList();
console.log(nodes)