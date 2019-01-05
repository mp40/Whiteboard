class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        function recurse(node) {
            if (node.value >= value && !node.left) {
                node.left = new BinarySearchTree(value);
                return;
            } else if (node.value < value && !node.right) {
                node.right = new BinarySearchTree(value);
                return;
            } else if (node.value < value && node.right) {
                recurse(node.right);
                return;
            } else if (node.value >= value && node.left) {
                recurse(node.left);
                return;
            }
        }
        recurse(this);
        return this;
    }
}

module.exports = BinarySearchTree;