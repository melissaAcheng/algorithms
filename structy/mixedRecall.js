// 104 Linked Palindrome
// Given the head of a linked list, return a boolean indicating whether or not the linkedlist is a palindrome.
// A palindrome is a sequence that is the same both forwards and backwards.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedPalindrome = (head) => {
  // Steps
  // 1. Traverse the linked list and add each node into array
  // 2. Make a copy of the array and reverse nodes
  // 3. Check if og array and reversed array are equal
  // 4. If yes, return true. If no, return false

  const nodes = [];
  let current = head;
  while (current !== null) {
    nodes.push(current.val);
    current = current.next;
  }

  const reversedNodes = [...nodes].reverse();

  return nodes.join("") === reversedNodes.join("");
};

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 2 -> 7 -> 7 -> 2 -> 3

console.log(linkedPalindrome(a));

// Time Complexity: O(n)
// Space: O(n)
// -------------------------------------------------------------//
// 105 Middle Value
// Given the head of linked list, return the value of the middle node
// If the linked list has an even number of nodes, then return the value of the second middle node.
// You may assume that the input list is non-empty.

const middleValue = (head) => {
  // add all nodes to array
  // return the node at index Math.floor(array.length / 2)
  const array = [];

  let current = head;

  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }

  return array[Math.floor(array.length / 2)];
};

console.log(middleValue(a));

// Time: O(n)
// Space: O(n)

const _middleValue = (head) => {
  // initialize slow and fast pointer
  // slow pointer moves by 1, fast pointer moves by 2 (twice as fast as slow)
  // when fast pointer is equal to null or fast.next is equal to null, return the value of slow
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

console.log(_middleValue(a));
// n = num of nodes
// Time - O(n) travsersing through each node
// Space - O(1) not using any extra space
// -------------------------------------------------------------//

// 106 Linked List cycle
// Given the head of a linked list, return a boolean indicating whether or not the linked list contains a cycle

const linkedListCycle = (head) => {
  // use two pointers, slow and fast
  // if slow equals fast, then there is a cycle - return false
  // Edge cases - if it's the first iteration, do NOT return true

  let slow = head;
  let fast = head;
  let firstIteration = true;
  
  while (fast !== null && fast.next !== null) {
    if (slow === fast && !firstIteration) return true;
    slow = slow.next;
    fast = fast.next.next;
    firstIteration = false;
  }
  
  return false;
};

const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = q; // cycle

//    ________________
//  /                 \
// q -> r -> s -> t -> u 

console.log(linkedListCycle(q));