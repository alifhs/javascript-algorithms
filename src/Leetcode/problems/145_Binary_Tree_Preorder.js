/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  let traverse = [];
  if (root) traverse.push(root.val);
  else return traverse;
  if (root.left) {
    traverse = traverse.concat(preorderTraversal(root.left));
  }
  if (root.right) {
    traverse = traverse.concat(preorderTraversal(root.right));
  }

  return traverse;
};

preorderTraversal();
