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
    
    findMin(nodes){
        if(nodes == null) return Number.POSITIVE_INFINITY;
 
        let min = nodes.value;
        while(nodes !=null){
            if(min > nodes.value) min = nodes.value;
            nodes = nodes.next;
        }
        return min;
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
 
     
     merge_Sort(list1, list2){
         let sorted = new linkedList();
         let min = null;
         let sortPtr = null;
 
         while(list1 || list2){
             let minOnList1 = this.findMin(list1);
             let minOnList2 = this.findMin(list2);
             if(minOnList1 < minOnList2){
                 list1 =   this.delete(list1, minOnList1)
                 min = minOnList1;        
             }
             else{
                 list2 = this.delete(list2, minOnList2)
                 min = minOnList2;
             }
             if(sorted.head == null){
                 sorted.head = new Node(min);
                 sortPtr = sorted.head;
             }
             else{
                sortPtr.next = new Node(min);
                sortPtr = sortPtr.next; 
             }
         }
         return sorted;
     }
 
    removeDup(){
        let nodes = this.head;
        let arr = []
        let last = null, prev = null;
        while(nodes){
            if(!arr.includes(nodes.value)){
                arr.push(nodes.value)
                last = nodes
            }
            else{
                last.next = nodes.next
            }
            nodes = nodes.next;
        }
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

let arr1 = userInput[2].split(' ');
let arr2 = userInput[3].split(' ');

let nodes1 = new linkedList();
arr1.forEach(data => nodes1.add(+data));

let nodes2 = new linkedList();
arr2.forEach(data => nodes2.add(+data));

let allNodes = new linkedList();
allNodes = allNodes.merge_Sort(nodes1.head, nodes2.head);
console.log(allNodes.toArray().join(' '))
});
