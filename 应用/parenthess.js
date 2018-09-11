const Stack = require("../栈/Stack");
/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 */
function isValid(s) {
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c == "(" || c == "[" || c == "{") {
            stack.push(c);
        } else {
            if (stack.isEmpty()) {
                return false;
            }
            let topChar = stack.pop();
            if (c == ")" && topChar != "(") {
                return false;
            }
            if (c == "]" && topChar != "[") {
                return false;
            }
            if (c == "}" && topChar != "{") {
                return false;
            }
        }
    }
    return true;
}

let ss = ''
console.log(isValid(ss));
