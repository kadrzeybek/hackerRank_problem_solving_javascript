function aVeryBigSum(ar) {
    let sum = 0;
    ar.forEach(element => {
        sum += element;
    });
    return sum
}

//test 
let ar =[1000005,1000015,1000020]
let total = aVeryBigSum(ar);
console.log(total) //3000040