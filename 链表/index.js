const LinkedList = require('./linkedList');
let link = new LinkedList();
link.addFirst(1);
link.addFirst(2);
link.addFirst(3);
link.addFirst(4);
link.addFirst(5);
link.addLast(2)
link.addLast(3)
link.addLast(4)
link.addLast(5)
link.addLast(1)
link.addLast(7)
link.addLast(8);
link.addFirst(9);
link.addFirst(11);
console.log(link.toString());
link.removeElements(4);
link.removeElements(1);
console.log(link.toString());


