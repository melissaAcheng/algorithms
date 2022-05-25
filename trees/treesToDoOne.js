class BTNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  add(val) {
    if (!this.root) {
      this.root = new BTNode(val);
      return this;
    } else {
      let runner = this.root;
      while (runner) {
        if (val < runner.val) {
          if (!runner.left) {
            runner.left = new BTNode(val);
            return this;
          } else {
            runner = runner.left;
          }
        } else {
          if (!runner.right) {
            runner.right = new BTNode(val);
            return this;
          } else {
            runner = runner.right;
          }
        }
      }
    }
  }
}

let newTree = new BST();
console.log(newTree.add(2).add(5).add(3).add(9).add(1));
