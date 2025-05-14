function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        if(x1 === x2){
            return 'YES'
        }else{
            return 'No'
        }
    }

    let n = (x2 - x1) / (v1 - v2);

    if (n >= 0 && Number.isInteger(n)) {
        return 'YES'
    } else {
        return 'NO'
    }
}


//test
let result = kangaroo(0,3,4,2) // NO
console.log(result)