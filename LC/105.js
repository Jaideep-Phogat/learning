 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }



var buildTree = function(preorder, inorder) {
    p = i = 0
    build = function(stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[p++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};


const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];

const ans=buildTree(preorder,inorder);

console.log(ans);