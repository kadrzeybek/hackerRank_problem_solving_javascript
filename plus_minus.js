function plusMinus(arr) {
    let positive =0;
    let negative =0;
    let zero =0;
    arr.forEach(element =>{
        if(element>0){
            positive++  
        }else if(element<0){
            negative++
        }else{
            zero++
        }
    })
    let sum = positive+negative+zero
    console.log((positive/sum).toFixed(6))
    console.log((negative/sum).toFixed(6))
    console.log((zero/sum).toFixed(6))
}

//test
let arr = [1,0,5,-5,4,0]
plusMinus(arr) //0.500000 0.166667 0.333333