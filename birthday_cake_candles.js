function birthdayCakeCandles(candles) {
    let max = Math.max(...candles)
    return (candles.filter(element => element === max)).length
}

//test
let candles = [2,4,4,5,4,6,6,6]
let result = birthdayCakeCandles(candles)
console.log(result) //3