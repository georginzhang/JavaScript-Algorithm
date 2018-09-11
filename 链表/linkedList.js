let LinkedList = (function() {
    let Head = null;
    let size = 0;
    function _Node(e, next) {
        this.e = e;
        this.next = next;
    }
    class LinkedList {
        toString() {
            let result = "start:";
            let curr = Head;
            while (curr.next) {
                result += curr.e + "-->";
                curr = curr.next;
            }
            result += "null";
            return result;
        }
        addFirst(e) {
            Head = new _Node(e, Head);
            size++;
        }
        add(index, e) {
            if (index == 0) {
                addFirst(e);
                return;
            }
            let prev = Head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            prev.next = new _Node(e, prev.next);
            size++;
        }
        addLast(e) {
            this.add(size, e);
        }
        get(index) {
            let curr = Head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr.e;
        }
        delete(index) {
            //普通循环写法
            let prev = Head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            let retNode = prev.next;
            prev.next = retNode.next;
            retNode.next = null;
            return retNode.e;
        }
        removeElements(val) {
            let head = Head;
            this._removeLoop(head, val);
        }
        _removeLoop(head, val) {
            //递归写法,可以删除重复的元素，不能再返回已经删除的元素了
            if (!head) {
                return null;
            }
            head.next = this._removeLoop(head.next, val);
            return head.e == val ? head.next : head;
        }
        getSize() {
            return size;
        }
        getHead() {
            return Head;
        }
    }
    return LinkedList;
})();

module.exports = LinkedList;
