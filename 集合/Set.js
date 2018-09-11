const bst = require("../二分搜索树/bst.js");
let BSTset = (function() {
    let size = 0;
    let _this = new bst();
    class BSTset {
        constructor() {
        }
        add(e) {
            _this.add(e);
        }
        toString() {
            _this.middleOrder();
        }
        remove(e){
            _this.remove(e)
        }
    }
    return BSTset;
})();

module.exports = BSTset;
