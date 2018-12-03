class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root, node) {
		if (node.data < root.data) {
			if (root.left === null) {
				root.left = node;
			} else {
				return this.insertNode(root.left, node);
			}
		} else {
			if (root.right === null) {
				root.right = node;
			} else {
				return this.insertNode(root.right, node);
			}
		}
	}

	preOrder(node, arr) {
		if (node !== null) {
			//console.log(node.data);
			arr.push(node.data);
			this.preOrder(node.left, arr);
			this.preOrder(node.right, arr);
		}
		return arr;
	}

	inOrder(node, arr) {
		if (node !== null) {
			this.inOrder(node.left, arr);
			//console.log(node.data);
			arr.push(node.data);
			this.inOrder(node.right, arr);
		}
		return arr;
	}

	postOrder(node, arr) {
		if (node !== null) {
			this.postOrder(node.left, arr);
			this.postOrder(node.right, arr);
			//console.log(node.data);
			arr.push(node.data);
		}
		return arr;
	}
  
  getRoot() {
		return this.root;
	}

	totalNode(node) {
		if (node === null) {
			return (0);
		}
		return (1 + this.totalNode(node.left) + this.totalNode(node.right));
	}
  
  isSubTree(tree, subtree) {
  	var subtree_index = 0;
  	var is_sub_tree = false;
  	for (var i in tree) {
      if (subtree[subtree_index] === tree[i]) {
      	++subtree_index;
        if (subtree_index == subtree.length) {
        	  is_sub_tree = true;
        		break;
        }
      } else {
      	subtree_index = 0;
      }
    }
    return is_sub_tree;
  }

}

function init() {
	var bst = new BST();
  bst.insert(15); 
  bst.insert(25); 
  bst.insert(10); 
  bst.insert(7); 
  bst.insert(22); 
  bst.insert(17); 
  bst.insert(13); 
  bst.insert(5); 
  bst.insert(9); 
  bst.insert(27);
	var inorder_tree_arr = bst.inOrder(bst.getRoot(), new Array());
	var preorder_tree_arr = bst.preOrder(bst.getRoot(), new Array());

	var bst_subtree = new BST();
	bst_subtree.insert(7);
	bst_subtree.insert(5);
	bst_subtree.insert(9);
	var inorder_subtree_arr = bst_subtree.inOrder(bst_subtree.getRoot(), new Array()); 
	var preorder_subtree_arr = bst_subtree.preOrder(bst_subtree.getRoot(), new Array());
  
  if (bst.isSubTree(inorder_tree_arr, inorder_subtree_arr) && bst.isSubTree(preorder_tree_arr, preorder_subtree_arr)) {
  	console.log("Subtree present");
  } else {
  	console.log("Subtree doesn't exist");
  }
}

init();
