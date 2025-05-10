function simpleArraySum(ar) {
    let sum=0;
    ar.forEach(element => {
        sum+= element;
    });
    return sum
}

//test
const ar = [1,2,3]
sum = simpleArraySum(ar)
console.log(sum) // 6