class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
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

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, key) {
		if (node === null) {
			return null;
		}

		if (node.data > key) {
			node.left = removeNode(node.left. key);
			return node;
		} else if (node.data < key) {
			node.right = removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			} else if (node.left === null) {
				node = node.right;
				return node;
			}  else if (node.right === null) {
				node = node.left;
				return node;
			} 
		}

		var rightMinNode = this.findMinNode(node.right);
		node.data = rightMinNode.data;

		node.right = this.removeNode(node.right, node.data);
		return node;
	}

	findMinNode(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNode(node.left);
		}
	}

	getRootNode() {
		return this.root;
	}

	findMin() {
		var current = this.root;
		while(current.left !== null) {
			current = current.left;
		}
		return current.data;
	}

	findMax() {
		var current = this.root;
		while(current.right !== null) {
			current = current.right;
		}
		return current.data;
	}

	inorder(node) {
		if (node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}

	preorder(node) {
		if (node !== null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	postorder(node) {
		if (node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}

	showTree() {
		return JSON.stringify(this.root);
	}

	search(node, data) {
		if (node === null) {
			return null;
		}

		if (node.data > data) {
			return this.search(node.left);
		} else if (node.data < data) {
			return this.search(node.right);
		} else {
			return node;
		}
	}

	evenNode(node) {
		if (node !== null) {
			this.evenNode(node.left);
			if (node.data % 2 === 0) 
				console.log(node.data);
			this.evenNode(node.right);
		}
	}

	closestNodeUtils(node, value) {
		if (node === null) {
			return null;
		}

		if (node.data === value) {
			diff_key = node.data;
			diff_key_valu = 0;
			return;
		}

		if (diff_key_valu > Math.abs(node.data - value) ) {
			diff_key = node.data;
			diff_key_valu = Math.abs(node.data - value);
		}

		if (node.data > value) {
			this.closestNodeUtils(node.left, value);
		} else {
			this.closestNodeUtils(node.right, value);
		}
	}

	closestNode(value) {
		diff_key = -1;
		diff_key_valu = 9999999;
		this.closestNodeUtils(this.root, value);
		return diff_key;
	}

	treeDepth(node) {
		if (this.root === null) {
			return null;
		} else {
			int lDepth = this.treeDepth(node.left);
			int rDepth = this.treeDepth(node.right);

			if (lDepth > rDepth)
				return lDepth + 1;
			else 
				return rDepth + 1;
		}


	}
	findTreeHeight() {
		if (this.root === null) {
			return 0;
		}

		var max_depth = Math.max(findTreeHeight(this.root.left), findTreeHeight(this.root.right)) + 1;
	}

	levelOrder() {
		var q = new Quene();
		q.push(this.root);
		while (1) {
			var count = q.length;
			if (count == 0) 
				break;
			while (count > 0) {
				var front = q.front();
				q.dequeue();
				if (front.left !== null) {
					q.enqueue(front.left);
				}
				if (front.right !== null) {
					q.enqueue(front.right);
				}
				--count;
			}
		}
	}

	reverseLevelOrder() {
		var q = new Quene();
		var s = new Stack();
		q.push(this.root);
		s.push(this.root);
		while (1) {
			var count = q.length;
			if (count == 0) 
				break;
			while (count > 0) {
				var front = q.front();
				q.dequeue();
				if (front.left !== null) {
					q.enqueue(front.left);
					s.push(front.left);
				}
				if (front.right !== null) {
					q.enqueue(front.right);
					s.push(front.right);
				}
				--count;
			}
		}
	}

	levelOrderFnc(nodes) {
		var q = new Quene();
		var s = new Stack();
		q.push(nodes);
		s.push(nodes);
		while(1) {
			var count = q.length;
			if (count === 0)
				break;
			while (count > 0) {
				var front = q.front();
				q.dequeue();
				if (front.left !== null) {
					q.enqueue(front.left);
					s.push(front.left);
				}
				if (front.right !== null) {
					q.enqueue(front.right);
					s.push(front.right);
				}
				--count;
			}
		}
		return s;
	}

	checkmirrorTree() {
		var t1 = levelOrderFnc(this.root);
		var t2 = levelOrderFnc(this.root);
		var t3 = (t1 === t2) ? 'YES' : 'NO';
		console.log(t3);
	}
}

var bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
console.log(showTree());