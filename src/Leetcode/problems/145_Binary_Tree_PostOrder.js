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
const postorderTraversal = (root) => {
  let traverse = [];
  if (root) {
    // pass
  } else return traverse;
  if (root.left) {
    traverse = traverse.concat(postorderTraversal(root.left));
  }
  if (root.right) {
    traverse = traverse.concat(postorderTraversal(root.right));
  }
  traverse.push(root.val);

  return traverse;
};

postorderTraversal();
