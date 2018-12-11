class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null
	}

	add(data) {
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root, node) {
		if (root.data > node.data) {
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

	getRoot() {
		return this.root;
	}
  
	totalLeaf(node) {
		if (node === null) {
			return 0;
		} else if (node.left === null && node.right === null) {
			return 1;
		} else {
			return this.totalLeaf(node.left) + this.totalLeaf(node.right);
		}
	}
}


function init() {
	var bst = new BST();
	bst.add(10);
	bst.add(5);
	bst.add(12);
	bst.add(4);
	bst.add(6);
	bst.add(14);
	bst.add(6);
	console.log("Total Leaf : " + bst.totalLeaf(bst.getRoot()));
}

init();