/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      const newNode = new Node(val);

      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }
      else{
          const tail = this.tail;
          tail.next = newNode;
          newNode.prev = tail;
          this.tail = newNode;
      }
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
      const newNode = new Node(val);

      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }
      else{
          const head = this.head;
          head.prev = newNode;
          newNode.next = head;
          this.head = newNode
        }
        this.length ++

  }

  /** pop(): remove last item & return the value of removed item. */

  pop() {
      if (!this.head){return 0}
      else{
          const popNode = this.tail;
          const prev = popNode.prev;
          if(prev){
              popNode.prev = null;
              prev.next = null;
              this.tail = prev;
              this.length --;
              return popNode.val;
            }
          if(!prev){
              const headTail = this.head;
              this.head = null;
              this.tail = null;
              this.length = 0;
              return headTail.val;
          }
        }
  }

  /** shift(): remove first item & return the value of removed item. */

  shift() {
      if(!this.head){return 0}
      else {
          const popNode = this.head;
          const next = popNode.next;
          if(next){
              popNode.next = null;
              next.prev = null;
              this.head = next;
              this.length --;
              return popNode.val;
          }
          if(!next){
              const headTail = this.head;
              this.head = null;
              this.tail = null;
              this.length = 0;
              return headTail.val;
          }
      }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // const item = 
    if(!this.head){return};
    const actualHead = this.head;
    let i = 0;
    while(this.head){
        const currentNode = this.head;
        if (i == idx){
            this.head = actualHead;
            return currentNode.val;
        }
        i ++;
        this.head = currentNode.next;
    }
    this.head = actualHead;
    return -1;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(!this.head){return};
    const actualHead = this.head;
    let i = 0;
    while(this.head){
        const currentNode = this.head;
        if (i == idx){
            this.head = actualHead;
            currentNode.val = val;
            return currentNode.val;
        }
        i ++;
        this.head = currentNode.next;
    }
    this.head = actualHead;
    return -1;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    // empty list
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++
        return
    }

    // insert at head
    if (idx === 0){
        const head = this.head;
        newNode.next = head;
        head.prev = newNode;

        this.head = newNode;
        this.length ++;
    }

    // insert at tail
    else if (idx === this.length ){
        const tail = this.tail;
        newNode.prev = tail;
        tail.next = newNode;

        this.tail = newNode;
        this.length ++;
    }

    else{
    let beforeNode;
    let afterNode;

    const head = this.head;
    let i =0;
    while(this.head){
        const currentNode = this.head;

   

        if(i === idx){
            beforeNode = currentNode.prev;
            afterNode = currentNode;
            console.log('before=',beforeNode,'after=',afterNode);
            break
        }
        this.head = head.next;
        i++;
        this.head = currentNode.next;
    }
    this.head = head;

    beforeNode.next = newNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    this.length ++;

    }
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // empty list
    if(!this.head){
        return "This Linked List is an empty list";
    }

    // single node list
    if(this.length === 1){
        this.head = null;
        this.tail = null;
        this.length --;
        return
    }

    // remove head
    if (idx === 0){

        return
    }

    // remove tail
    if (idx === this.length-1){

        return
    }

    // remove at anywhere in middle
    else{

    }


  }

  /** average(): return an average of all values in the list */

  average() {
    // empty list
    if(!this.head){return 0};

    // non empty lists
    let avg = 0;
    let i = 0;
    const head = this.head;
    while(this.head){
        const currentNode = this.head;
        avg += currentNode.val;
        this.head = currentNode.next;
    }
    this.head = head;
    return avg/this.length;

    
  }
}


module.exports = LinkedList;
