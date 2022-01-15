/** BinaryTreeNode: node for a general tree. */
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root ===null)return 0;

    const stack = [this.root];
    const visited = [];
    let depth = 0;
    while(stack.length>0){
        const currentNode = stack.pop();
        visited.push(currentNode);
        if (currentNode.right!==null){
            depth ++;
            stack.push(currentNode.right)}
        if (currentNode.left!==null){
            depth ++;
            stack.push(currentNode.left)}
        else if(currentNode.left === null || currentNode.right === null){
            return depth
        }
    }
    // return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // TODO fix this
  maxDepth() {
      
      const stack = [this.root]
      const visited = [];
      const depthArray = [];
      let depth = 0;

      while(stack.length>0){
          const currentNode = stack.pop();
          if(currentNode.left!==null){
              stack.push(currentNode.left)
          }
          if (currentNode.right!==null){
              stack.push(currentNode.right);
          }
          if(currentNode.left!==null || currentNode.right!==null){
              depth++
          }
          if (currentNode.left===null && currentNode.right===null){
            depthArray.push(depth);
            depth = 0;
          }
      }
      return Math.max(...depthArray)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    function Recursion(root){

      // null check, if submitted empty node
      if (root !== null && root.left === undefined && root.right === undefined) return 0;
      
      // base condition
      if (root === null) return -Infinity
  
      if(root.left===null && root.right===null){
          return root.val
      }
  
      const left = Recursion(root.left);
      const right = Recursion(root.right);
  
      return root.val + Math.max(left, right);
    };

    const root = this.root;
    if (root === null && this.left === undefined && this.right === undefined) return 0;
    
    else {
        return Recursion(root);
    }
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}



// emptyTree = new BinaryTree();

// // build small tree;
// let smallLeft = new BinaryTreeNode(5);
// let smallRight = new BinaryTreeNode(5);
// let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
// smallTree = new BinaryTree(smallRoot);

// // build large tree
// let node6 = new BinaryTreeNode(1);
// let node5 = new BinaryTreeNode(1);
// let node4 = new BinaryTreeNode(2);
// let node3 = new BinaryTreeNode(3, node4, node6);
// let node2 = new BinaryTreeNode(5, node3, node5);
// let node1 = new BinaryTreeNode(5);
// let root = new BinaryTreeNode(6, node1, node2);
// largeTree = new BinaryTree(root);

// console.log(emptyTree.maxSum());
// console.log(smallTree.maxSum());
// console.log(largeTree.maxSum());

module.exports = { BinaryTree, BinaryTreeNode };
