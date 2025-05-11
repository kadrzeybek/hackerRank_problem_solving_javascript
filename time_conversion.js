function timeConversion(s) {
    let hour = parseInt(s.slice(0,2))
    let others = s.slice(2,8)
    let period = s.slice(8)
    
    if (period === 'AM') {
        if (hour === 12) hour = 0;
    } else {
        if (hour !== 12) hour += 12;
    }
    return hour.toString().padStart(2, '0') + others;

}

//test
let s = '07:05:45PM'
let result = timeConversion(s)
console.log(result)