/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

var buildTree = function(inorder, postorder) {
    function build(is,ie,ps,pe){
        if (is>ie||ps>pe)return null;
        const rootV=postorder[pe];
        const root=new TreeNode(rootV);
        const RI=inorder.indexOf(rootV);
        const ls=RI-is;
        root.left=build(is,RI-1,ps,ps+ls-1);
        root.right=build(RI+1,ie,ps+ls,pe-1)
        return root;
    }
    return build(0,inorder.length-1,0,postorder.length-1)
    
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

let tree = buildTree(inorder, postorder);
console.log(tree);