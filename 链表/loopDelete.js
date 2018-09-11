const LinkedList = require('./linkedList');
let link = new LinkedList();
link.addFirst(1);
link.addLast(2)
link.addLast(3)
link.addLast(4)
link.addLast(5)
link.addLast(6)
link.addLast(7)
link.addLast(8);
console.log(link.toString())

function removeElements(head, val) {
    if (head == null) return null;
    head.next = removeElements(head.next, val);
    return head.e == val ? head.next : head;
}
removeElements(link.head, 4);
console.log(link.toString())