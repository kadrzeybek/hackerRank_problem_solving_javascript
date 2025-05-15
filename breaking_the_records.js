function breakingRecords(scores) {
    let min = 0, max=0;

    let min_val = scores[0]
    let max_val = scores[0]

    for (let i = 1; i < scores.length; i++) {
        if(scores[i]<min_val){
            min++;
            min_val = scores[i]
        }else if(scores[i]>max_val){
            max++;
            max_val = scores[i]
        }
        
    }

    return [max,min]
}

//test

let scores = [10,5,20,20,4,5,2,25,1]
let result = breakingRecords(scores)
console.log(result) // 2 4
