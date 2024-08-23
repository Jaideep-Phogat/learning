/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit=0;
  const len=prices.length
  if(len <= 1)return profit;
//   for (let i = 0; i < len; i++) {
  
    //buy
    // if (prices[i]<prices[i++]) {
    //     profit+=prices[i++]-prices[i];
    // }
    //sell
//     if (prices[i]<prices[i++] && prices[i+1]<prices[i+2] && prices[i+2]>prices[i+3]) {
//         profit+=prices[i++]-prices[i];
//     }
//   }
//   return profit;
// };
let hold = -prices[0]; // Initial state of holding a stock
let sold = 0;          // Initial state of selling a stock
let rest = 0;  
  for (let i = 1; i < len; i++) {
    let prevHold = hold;
    let prevSold = sold;
    let prevRest = rest;

    hold = Math.max(prevHold, prevRest - prices[i]); // Hold a stock: either keep holding or buy new stock
    sold = prevHold + prices[i];                     // Sell the stock
    rest = Math.max(prevRest, prevSold);             // Rest: either keep resting or rest after selling
}

return Math.max(sold, rest); // Maximum profit is either from selling or resting on the last day
};
const prices = [1,2,3,0,2];

const ans = maxProfit(prices);

console.log(ans);