let BST = (function() {
    let root = {};
    let size = 0;
    function Node(e) {
        this.e = e;
        this.left = null;
        this.right = null;
    }
    function orderPrev(node) {
        if (node == null) {
            return;
        }
        console.log(node.e);
        orderPrev(node.left);
        orderPrev(node.right);
    }
    function orderMiddle(node) {
        if (node == null) {
            return;
        }
        orderMiddle(node.left);
        console.log(node.e);
        orderMiddle(node.right);
    }
    function innerAdd(node, e) {
        if (node == null) {
            size++;
            return new Node(e);
        }
        if (e < node.e) {
            node.left = innerAdd(node.left, e);
        } else if (e > node.e) {
            node.right = innerAdd(node.right, e);
        }
        return node;
    }
    function _findMin(node) {
        if (node.left == null) {
            return node;
        }
        return _findMin(node.left);
    }
    function _findMax(node) {
        if (node.right == null) {
            return node;
        }
        return _findMax(node.right);
    }
    function _removeMin(node) {
        if (node.left == null) {
            let nodeRight = node.right;
            node.right = null;
            size--;
            return nodeRight;
        }
        node.left = _removeMin(node.left);
        return node;
    }
    function _removeMax(node) {
        if (node.right == null) {
            let nodeLeft = node.left;
            node.left = null;
            size--;
            return nodeLeft;
        }
        node.right = _removeMax(node.right);
        return node;
    }
    function _remove(node, e) {
        if (node == null) {
            return null;
        }
        if (e < node.e) {
            node.left = _remove(node.left, e);
            return node;
        } else if (e > node.e) {
            node.right = _remove(node.right, e);
            return node;
        } else {
            if (node.left == null) {
                let nodeRight = node.right;
                node.right = null;
                size--;
                return nodeRight;
            }
            if (node.right == null) {
                let nodeLeft = node.left;
                node.left = null;
                size--;
                return nodeLeft;
            }
            // let successor = _findMin(node.right); //找到替代的后继或者前驱
            // successor.right = _removeMin(node.right);
            // successor.left = node.left;
            // node.left = node.right = null;
            // return successor;
            let successor = _findMax(node.left);
            successor.left = _removeMax(node.left);
            successor.right = node.right;
            return successor;
        }
    }
    function _contains(node, e) {
        if (node == null) {
            return false;
        }
        if (e < node.e) {
            return _contains(node.left, e);
        } else if (e > node.e) {
            return _contains(node.right, e);
        } else {
            return true;
        }
    }
    class BST {
        constructor() {}
        getRoot() {
            return root;
        }
        size() {
            return size;
        }
        isEmpty() {
            return size == 0;
        }
        add(e) {
            if (this.isEmpty()) {
                root = new Node(e);
                size++;
            } else {
                innerAdd(root, e);
            }
        }
        prevOrder() {
            orderPrev(root);
        }
        middleOrder() {
            orderMiddle(root);
        }
        removeMin() {
            //删除树的最小节点
            let ret = _findMin(root);
            _removeMin(root);
            return ret;
        }
        removeMax() {
            //删除树的最大节点
            let ret = _findMax(root);
            _removeMax(root);
            return ret;
        }
        remove(e) {
            //删除树的任意节点
            _remove(root, e);
        }
        contains(e) {
            //树中是否包含了次元素
            return _contains(root, e);
        }
    }
    return BST;
})();
module.exports = BST;
