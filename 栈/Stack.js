/**
 * 从用户的角度来看，只要支持这些操作，这个就是栈数据结构
 * push:入栈
 * pop:出栈
 * peek:查栈
 */
const Queue = require("../队列/loopQueue");
const Arr = new Queue();
class Stack {
    push(obj) {
        Arr.add(obj);
    }
    pop() {
        return Arr.removeLast();
    }
    peek() {
        return Arr.getFirst();
    }
    getSize() {
        return Arr.getSize();
    }
    isEmpty() {
        return Arr.isEmpty();
    }
    toString() {
        let logStr = "Stack:[";
        for (let i = 0; i < this.getSize(); i++) {
            logStr += Arr.get(i);
            if (i != this.getSize() - 1) {
                logStr += ",";
            }
        }
        logStr += "] top";
        return logStr;
    }
}

//应用里面有一道练习题
module.exports = Stack;
