/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;
   
    const getHead = () =>{
        return head;
    }
    const getTail = () =>{
        return tail;
    }
    const add = val =>{
        const obj = {};
        obj.value = val;
        obj.next = null;
        if(head === null && tail === null){
            head = obj;
            tail = obj;
        }else{
        tail.next = obj;
        tail = obj;
        }
        return tail;
    }
    const get = num =>{
        let count = 0;
        let getNode = head;
        while (getNode){
            if(num === count){
             return getNode;
            }
            count++;
            getNode = getNode.next;
            }
            return false;
    };
    const remove = num =>{
        let prevNode = get(num - 1);
        let currNode = get(num);
        let nextNode = get(num + 1)

        if(currNode === false){
            return false;
        }else if(prevNode === false && nextNode === false){
            head = null;
        }else if(prevNode !== false && nextNode === false){
            prevNode.next = null;
            tail = prevNode;
        }else if(num === 0){
            head = head.next;
        }else {
            prevNode.next = currNode.next;
            tail = currNode.next;
        }
    };

    const insert = (val, num) => {
        let prevNode = get(num -1);
        let nextNode = get(num + 1);
        let currNode = get(num);



        if(currNode === false){
            return false;
        }else if(prevNode === false && nextNode === false){
            head = add(val);
            head.next = currNode;
        }else if(prevNode !== false){
            tail = prevNode;
            prevNode.next = add(val);
            nextNode = prevNode.next;
            nextNode.next = currNode; 
        }else if(num === 0){
            nextNode = head
            head = null;
            tail = null;
            let newNode = add(val);
            newNode.next = nextNode;
        }

    }

 return{
     getHead,
     getTail,
     add,
     get,
     remove,
     insert,
 }

};
