class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    let newNode = new Node(value);
    // check if current list is empty
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  removeFront() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
    return this.head;
  }
  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }
  contains(value) {
    let runner = this.head;

    while (runner !== null) {
      if (runner.data === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  length() {
    let runner = this.head;
    let sum = 0;

    while (runner !== null) {
      sum++;
      runner = runner.next;
    }
    return sum;
  }
}

let newList = new SLL();
console.log(newList.addFront(1));
console.log(newList.addFront(2));
console.log(newList.addFront(3));
console.log(newList.removeFront());
console.log(newList.front());
console.log(newList.contains(1));
console.log(newList.length());
