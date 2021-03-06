'use strict';
const memo = new Map();
memo.set (0, 0);
memo.set (1, 0);
memo.set (2, 1);
function trib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set (n, value);
    return value;
}
const length = 100;
for ( let i = 0; i <= length; i++){
    console.log(trib(i));
}

//トリボナッチ数列
// 0番目は0、1番目は0、2番目は1、
// その後は 1 つ前と 2 つ前と 3 つ前の値を足したものとなります。