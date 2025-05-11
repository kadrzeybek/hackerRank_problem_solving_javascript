function miniMaxSum(arr) {
    arr.sort(function(a,b){return a-b}) //sorted down-up
    let min = 0;
    let max = 0;

    for(let i=0;i<4;i++){
        min +=arr[i]
        max += arr[arr.length-1-i]
    }
    console.log(min, max)
}

//test
let arr = [89,16,45,7,15]
miniMaxSum(arr) //83 165