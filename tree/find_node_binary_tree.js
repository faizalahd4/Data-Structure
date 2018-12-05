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

	isNodeExist(node, key) {
		if (node === null)
			return false;

		if (node.data == key)
			return true;

		var res_left = this.isNodeExist(node.left, key);
		var res_right = this.isNodeExist(node.right, key);

		return res_left | res_right;
	}
}

function init() {
	var bst = new BST();
	bst.insert(10);
	bst.insert(5);
	bst.insert(12);
	bst.insert(4);
	bst.insert(6);
	if(bst.isNodeExist(bst.getRoot(), 15)) {
		console.log("Node Exists");
	} else {
		console.log("Node Doesn't Exists");
	}
}

init();

