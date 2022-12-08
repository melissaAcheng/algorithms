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

  return (nodes.join('') === reversedNodes.join(''));
  
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