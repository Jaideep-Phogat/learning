// function permutation(nums) {
//     let result = new Set();
//     let len=nums.length;
//     nums.sort((a, b) => a - b);
//     function backtrack(start, curr_set, curr_len) {
//         if (curr_len === len) {
//             result.add(Array.from(new Set(...curr_set)));
//         }
//         if (curr_len > len) {
//             return;
//         }
//         for (let i = start; i < nums.length; i++) {
//             if (i > start && nums[i] === nums[i - 1]) {
//                 continue;
//             }
//             curr_set.push(nums[i]);
//             backtrack(i , curr_set, curr_set.length);
//             curr_set.pop();
//         }
//     }

//     backtrack(0, [], 0);
//     return result;
// }





function permutation(nums) {
    let result = [];
    let len = nums.length;

    function backtrack(start) {
        if (start === len) {

            result.push([...nums]);
            return;
        }

        for (let i = start; i < len; i++) {

            if (i !== start && nums[i] === nums[start]) continue;

            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start + 1);

            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    nums.sort((a, b) => a - b);
    backtrack(0);
    return result;
}
const nums = [1, 2];

console.log(permutation(nums));
