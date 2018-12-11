class Node{
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

	isIdentical(root1, root2) {

		if (root1 === null && root2 === null) {
			return true;
		} else if (root1 !== null && root2 !== null) {
			return (root1.data === root2.data && this.isIdentical(root1.left, root2.left) && this.isIdentical(root1.right, root2.right));
		}

		return false;
	}
}

function init() {
	var tree_1 = new BST();
	tree_1.add(10);
	tree_1.add(5);
	tree_1.add(12);
	tree_1.add(4);
	tree_1.add(6);

	var tree_2 = new BST();
	tree_2.add(10);
	tree_2.add(5);
	tree_2.add(12);
	tree_2.add(4);
	tree_2.add(6);
	if (tree_1.isIdentical(tree_1.getRoot(), tree_2.getRoot())) {
		console.log('Both the trees is Identical');
	} else {
		console.log('Both the trees is not Identical');
	}
}

init();