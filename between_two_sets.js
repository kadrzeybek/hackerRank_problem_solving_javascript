//we have to know how find greatest common divisor and least common multiple

function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b]; 
    }
    return a;
    //16 96
    /*
    96 16
    16 0
    */
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
    //40 15
    //600/5 = 120
}


/*
40 15 2
20 15 2
10 15 2
5  15 3
5  5  5*
1  1
 */
function getTotalX(a, b) {
    let lcmA = a.reduce((acc, val) => lcm(acc, val));
    let gcdB = b.reduce((acc, val) => gcd(acc, val));

    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0){
            count++;
        }
    }
    return count;
}


let A = [2, 4];
let B = [16, 32, 96];
console.log(getTotalX(A, B)); //3
