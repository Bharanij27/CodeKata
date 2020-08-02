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
    
    insertAt(index, data){
        let node = this.head;
        let k = 1;
        let newNode = new Node(data);
        if(index == 1){
             newNode.next = node;
             this.head = newNode;
             return
        }
        while(node.next != null && k != index-1){
            node = node.next;
            k++;
        }
        if(node.next!=null){
            let nextNode = node.next;
            node.next = newNode;
            newNode.next = nextNode;
        }
        else node.next = newNode;
    }
    
    printList(node){
        console.log(node.value);
        if(node.next==null) return;
        this.printList(node.next)
    }
    
    
    mergeSort(node){
        if (node.next === null) return node;

        let left = node;
        let countNode = node;
        let right = null, rightPtr = null, leftPtr = node;
        let count = 0;
        while(countNode.next != null){
            count++;
            countNode = countNode.next;
        }

        let mid = Math.floor(count/2);
        let count2  = 0;
        
        while(count2 < mid){
            count2++;
            leftPtr = leftPtr.next;
        
        }
        
        right = leftPtr.next
        leftPtr.next = null;
        
        return this._merge(this.mergeSort(left), this.mergeSort(right));
    }
    
    
    _merge(left, right){
        let res = new linkedList();
        let resPtr = res.head;
        let leftPtr = left;
        let rightPtr = right;
        
        while(leftPtr && rightPtr){
            let tempNode = null;
            if(leftPtr.value < rightPtr.value){
                tempNode = leftPtr.value;
                leftPtr = leftPtr.next
            }
            else{
                tempNode = rightPtr.value;
                rightPtr = rightPtr.next
            }
            if(res.head==null){
                res.head = new Node(tempNode);
                resPtr = res.head;
            }
            else{
                resPtr.next = new Node(tempNode);
                resPtr = resPtr.next;
            }
        }
        
        resPtr.next = leftPtr; 
        while (resPtr.next)
            resPtr = resPtr.next;
            resPtr.next = rightPtr;
           return res.head; 
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
        return sorted.head;
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

    size(nodes){
        if(nodes==null) return 0;
        let count = 1;
        while(nodes.next!=null){
            count++;
            nodes = nodes.next;
        }
        return count;
    }

}

let nodes1 = new linkedList();
let nodes2 = new linkedList();
let sortedList = new linkedList();

let arr = [5, 3, 7, 1, 9];
let arr2 = [4, 6, 2, 8, 0];

arr.forEach(data =>{
    nodes1.add(data);
    console.log("after insertion of", data, "At node 1");
    nodes1.printList(nodes1.head);
    console.log("--------------------------");
});

arr2.forEach(data => {
    nodes2.add(data); 
    console.log("after insertion of", data, "At node 2");
    nodes2.printList(nodes2.head);
    console.log("--------------------------");
});


console.log("after Merge & Sort");
sortedList.head = nodes1.merge_Sort(nodes1.head, nodes2.head);
sortedList.printList(sortedList.head);
console.log("--------------------------");

console.log("Size of Linked List", sortedList.size(sortedList.head))

arr.forEach(data => {
    sortedList.removeFrom(data); 
    console.log("after deletion of", data);
    sortedList.printList(sortedList.head);
    console.log("--------------------------");
});

sortedList.printList(sortedList.head);

console.log("Reversing The List");
sortedList.reverse();
sortedList.printList(sortedList.head);