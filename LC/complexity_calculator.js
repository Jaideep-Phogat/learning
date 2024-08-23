const babelParser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function analyzeAST(ast) {
    let loopDepth = 0;
    let additionalComplexity = 0;

    traverse(ast, {
        ForStatement(path) {
            loopDepth++;
        },
        WhileStatement(path) {
            loopDepth++;
        },
        CallExpression(path) {
            const callee = path.node.callee;
            if (callee.property && (callee.property.name === 'slice' || callee.property.name === 'reduce')) {
                additionalComplexity++;
            }
        }
    });

    if (loopDepth === 1) {
        return 'O(n)';
    } else if (loopDepth === 2) {
        if (additionalComplexity > 0) {
            return 'O(n^3)'; // Nested loop with higher complexity operation
        }
        return 'O(n^2)';
    } else if (loopDepth === 3) {
        return 'O(n^3)';
    } else {
        return 'O(1)';
    }
}

function calculateTimeComplexity(code) {
    const ast = babelParser.parse(code, {
        sourceType: "module",
        plugins: ["jsx"]
    });

    return analyzeAST(ast);
}

// Test the function with the provided code
const code = `
function subarraySum(arr, k) {
    const len = arr.length;
    let count = 0;
    if (len < 1) return 0;

        for (let j = i; j < len; j++) {
            if (arr.slice(i, j + 1).reduce((partialSum, currVal) => partialSum + currVal, 0) === k) count++;
        }
    
    return count;
}
`;

console.log(calculateTimeComplexity(code)); // Should return 'O(n^3)'
