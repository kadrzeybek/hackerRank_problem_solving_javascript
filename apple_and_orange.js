function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let numA = 0, numB=0;
    for (let i=0;i<apples.length;i++){
    
        if((s<=a+apples[i]) && (a+apples[i]<=t)){
            numA +=1;
        }
    }
    
    for (let i=0;i<oranges.length;i++){
        if((s<=b+oranges[i]) && (b+oranges[i]<=t)){
            numB +=1;
        }
    }
    console.log(numA,numB);
}


//test
let apples = [-2,2,1];
let oranges = [5,-6];
let s = 7
let t = 11
let a = 5
let b = 15

countApplesAndOranges(s,t,a,b,apples,oranges) //1 1

