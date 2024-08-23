function subset(arr) {
  const len = arr.length;
  let unique = new Set();
  if (len < 1) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let sub = arr.slice(i, j + 1);
      unique.add(JSON.stringify(sub));
    }
  }
  return Array.from(unique).map(JSON.parse);
}

const input = [1, 2, 3];
console.log(subset(input));
