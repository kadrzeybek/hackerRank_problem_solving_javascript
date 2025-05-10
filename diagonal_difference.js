//summation from up to bottom
function diagonalDifference(ar) {
    let a = 0, b = 0;
    for (let i = 0; i < ar.length; i++) {
        a += ar[i][i];
        b += ar[i][ar.length - 1 - i];
    }
    return Math.abs(a-b)
}

// Test
let ar = [
    [3, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
let dif = diagonalDifference(ar);
console.log(dif); // 16



//same process but different direction
//summation is form bottom to up

/*
function diagonalDifference(ar) {
    let a = 0, b = 0;
    for (let i = ar.length-1; i >=0; i--) {
        a += ar[i][i];
        b += ar[i][ar.length - 1 - i];
    }
    return Math.abs(a-b)
    
}
*/