class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = data;
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
				root.left = node.data;
			} else {
				return this.insertNode(root.left, node);
			}
		} else {
			if (root.right === null) {
				root.right = node.data;
			} else {
				return this.insertNode(root.right, node);
			}
		}
	}

	getRoot() {
		return this.root;
	}

	maxDepth(node) {
		if (node === null) {
			return 0;
		} else {
			var depthl = this.maxDepth(node.left);
			var depthr = this.maxDepth(node.right);

			if (depthl > depthr) {
				return (depthl + 1);
			} else {
				return (depthr + 1);
			}
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
	console.log('Max Depth - ' + bst.maxDepth(bst.getRoot()));
}

init();