function subarraySum(arr, k) {
  const len = arr.length;
  let count = 0;
  let out = [];
  if (len < 1) return 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (
        arr
          .slice(i, j + 1)
          .reduce((partialSum, currVal) => partialSum + currVal, 0) === k
      ) {
        count++;
        if (i === j) {
          out.push([arr[i]]);
        } else {
          out.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return { count, out };
}

const input = [1, 2, 3];
console.log(subarraySum(input, 3));
