const sum = function(arr, index) {
    if (index == arr.length) {
        return 0;
    }
    return arr[index] + sum(arr, index + 1);
};

var total = sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
console.log(total);