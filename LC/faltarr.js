const arr2 = [0, 1, [2, [3, [4, 5]]]];

function flatarr(arr){
    let res=[];
    if (arr.length<1) return arr;
    for (let i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i]))res.push(...flatarr(arr[i]))
        else res.push(arr[i]);
    }
    return res;
}
console.log(flatarr(arr2));