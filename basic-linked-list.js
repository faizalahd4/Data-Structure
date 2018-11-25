class LinkedList{

	var head = null;
	var length = 0;

	var Node = function(element) {
		this.element = element;
		this.next = null; 
	};

	this.size = function() {
		return this.length;
	};

	this.front = function() {
		return this.head;
	};

	this.add = function(element) {
		var node = new Node(element);
		if ( head == null) {
			head = node;
		} else {
			var currentNode = node;
			while(currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.head = currentNode;
		}
		length++;
	};

	this.remove = function(element) {
		var currentNode = head;
		var previousNode = null;
		if(currentNode.element === element) {
			head = currentNode.next;
		} else {
			while(currentNode.element !== element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
	};

	this.empty = function(){
		return length === 0;
	};

	this.indexOf = function(index) {
	 	var currentNode = head;
	 	var count = -1;
	 	while (count<index) {
	 		count++;
	 		currentNode = currentNode.next;
	 	}
	 	return currentNode.element;
	};

	this.elementAt = function(index) {
		var currentNode = head;
		var count = 0;
		while(count<index) {
			count++;
			currentNode = currentNode.next;
		}
		return currentNode.element;
	};

	this.addAt = function(element, index){
		var node = new Node(element);

		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index > length) {
			return;
		}

		if (index === 0) {
			node.next = currentNode;
			head = node;
		} else {
			while(currentIndex<index){
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}
		length++;
	}

	this.removeAt = function(index) {
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;
		if (index > length){
			return;
		}
		if (index === 0) {
			head = currentNode.next;
		} else {
			while(currentIndex < index) {
				previousNode = currentNode;
				currentIndex = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	}

	





}
