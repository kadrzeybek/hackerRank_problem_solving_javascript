function gradingStudents(grades) {
    for (let i=0;i<grades.length;i++){
        if(grades[i] >= 38){
            if((grades[i] + 1) % 5 == 0 ){
            grades[i] += 1;
            }else if((grades[i] + 2) % 5 == 0){
                grades[i] += 2;
            }
        }
        
    }
    return grades

}
//test
let grades = [38,49,58,57,36,73]
let result = gradingStudents(grades)
console.log(result)
