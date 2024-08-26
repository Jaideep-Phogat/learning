function subSetSum(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
    function backtrack(start, curr_set, curr_sum) {
        if (curr_sum === target) {
            result.push([...curr_set]);
        }
        if (curr_sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            curr_set.push(candidates[i]);
            backtrack(i , curr_set, curr_sum + candidates[i]);
            curr_set.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}

const nums = [1, 2, 4, 5, 3];
const target = 5;
console.log(subSetSum(nums, target));
