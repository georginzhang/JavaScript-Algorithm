const BST = require("./bst");
let bst = new BST();
let arr = [5, 3, 6, 8, 4, 0, 9, 10, 7, 1, 2];
for (var i = 0; i < arr.length; i++) {
    bst.add(arr[i]);
}
// console.log(bst.removeMin())
// console.log(bst.removeMax());
// console.log(bst.remove(3));
console.log("-------------------------------------------");
// bst.middleOrder();
bst.prevOrder();
// console.log(bst.contains(6));
