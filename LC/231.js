var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};

const result = isPowerOfTwo(6);

console.log("result ",result);