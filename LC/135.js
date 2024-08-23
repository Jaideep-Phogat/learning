/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len=ratings.length;
    let ans=len;
    if(!len)return 0;
    for (var i=0;i<len;i++){
        let layer=0;
        if(ratings[i]>ratings[i+1]&&ratings[i+1]>=0){ans+=1;layer+1;}
        if(ratings[i+1]>=0&&ratings[i+1]>ratings[i]){ans+=1;i++}
        if (ratings[i+2]>=0&&ratings[i+2]>ratings[i+1]>ratings[i]) ans+=2;
        // if (ratings[i+2]>=0&&ratings[i+2]>ratings[i+1]>ratings[i]) ans+=1;

        // ratings[i]>ratings[i+1]&&ratings[i+1]>=0 a++
        // ratings[i+2]>=0&&ratings[i+2]>ratings[i+1]>ratings[i] ans+=1;

    }
    return ans;
};

const ratings = [1,2,87,87,87,2,1]
const output= candy(ratings)
console.log(output); //5