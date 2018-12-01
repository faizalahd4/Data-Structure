class Node{
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST{
	constructor() {
		this.root = null;
	}

	add(data) {
		var newNode = new Node(data);
		if (this.root === null) 
			this.root = newNode;
		else 
			this.insertNode(this.root, newNode);
	}

	insertNode(node, newNode) {
		if (node.data > newNode.data){
			if (node.left === null) {
				node.left = newNode;
			} else {
				return this.insertNode(node.left, newNode);
			}
		} else if (node.data < newNode.data){
			if (node.right === null) {
				node.right = newNode;
			} else {
				return this.insertNode(node.right, newNode);
			}
		}
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

	isCompeletBinaryTree(node, index, totalNode) {
		if (node === null) {
			return true;
		}

		if (index >= totalNode) {
			return false;
		}

		return (this.isCompeletBinaryTree(node.left, 2 * index + 1, totalNode) && 
			this.isCompeletBinaryTree(node.right, 2 * index + 2, totalNode));
	}
}

function init() {
	var bst = new BST();
	bst.add(10);
	bst.add(5);
	bst.add(12);
	bst.add(4);
	bst.add(6);
	var index = 0;
	var totalNode = bst.totalNode(bst.getRoot());
	console.log('Total Nodes - ' + totalNode);
	if (bst.isCompeletBinaryTree(bst.getRoot(), index, totalNode)) {
		console.log('Binary tree complete');
	} else {
		console.log('Binary tree not complete');
	}
}

init();
