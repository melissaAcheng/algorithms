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
    let length = 0;

    while (runner !== null) {
      length++;
      runner = runner.next;
    }
    return length;
  }
  display() {
    let runner = this.head;
    let list = "";

    while (runner !== null) {
      list += runner.data + ",";
      runner = runner.next;
    }
    return list;
  }
  max() {
    let runner = this.head;
    let max = 0;

    while (runner !== null) {
      if (runner.data > max) {
        max = runner.data;
        runner = runner.next;
      } else {
        runner = runner.next;
      }
    }
    return max;
  }
  min() {
    let runner = this.head;
    let min = runner.data;

    while (runner !== null) {
      if (runner.data < min) {
        min = runner.data;
        runner = runner.next;
      } else {
        runner = runner.next;
      }
    }
    return min;
  }
  average() {
    let runner = this.head;
    let sum = 0;
    let length = 0;

    while (runner !== null) {
      sum += runner.data;
      length++;
      runner = runner.next;
    }
    return sum / length;
  }
}

let newList = new SLL();
console.log(newList.addFront(3));
console.log(newList.addFront(5));
console.log(newList.addFront(1));
console.log(newList.removeFront());
console.log(newList.addFront(1));
console.log(newList.front());
console.log(newList.contains(1));
console.log(newList.length());
console.log(newList.display());
console.log(newList.max());
console.log(newList.min());
console.log(newList.average());
