/**
* Node Class with hold Node values
*
* @public
* @class
* @param {String} data
*/
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

/**
* Binary Search Tree class
*
* @public
* @class
*/
class BST {

	/**
	* Binary Search Tree constructor
	*
	* @public
	* @constructor BST
	*/
	constructor() {
		this.root = data;
	}

	/**
	* Add item in Binary Search Tree
	*
	* @public
	* @functionof BST
	* @param      {String} data
	*/
	add(data) {
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	/**
	* Insert item in Binary Search Tree
	*
	* @public
	* @functionof BST
	* @param      {Object} root
	* @param      {Object} node
	* @returns    {InsertNode}
	*/
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

	/**
	* Get Root node
	*
	* @public
	* @functionof BST
	* @returns    {Object}
	*/
	getRoot() {
		return this.root;
	}

	/**
	* Finding maximum depth of the tree
	*
	* @public
	* @functionof BST
	* @param      {Object} node
	*/
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

/**
* Initiate Binary search tree
*
* @public
* @function
*/
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