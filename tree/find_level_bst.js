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

	findLevel(node, key) {
		var que = new Quene();
		que.enqueue(node);
		var level = 1;
		var isLevelFound = false;

		while(1) {
			var count = que.size();
			while(count > 0) {
				var front = que.front();
				que.dequeue();
				if (front.left !== null) {
					que.enqueue(front.left);
				}
				if (front.right !== null) {
					que.enqueue(front.right);
				}
				if (front.data == key) {
					isLevelFound = true;
					break;
				}
				--count;
			}
			++level;
		}
	return isLevelFound ? level : -1;
	}
}

function init() {
	var bst = new BST();
	bst.insert(10);
	bst.insert(5);
	bst.insert(12);
	bst.insert(4);
	bst.insert(6);
	console.log(findLevel(bst.getRoot(), 6))

}

init();