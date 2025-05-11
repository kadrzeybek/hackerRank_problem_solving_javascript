function staircase(n) {
    for(let i=0;i<n;i++){
        let space = ' '.repeat(n-i)
        let hash = '#'.repeat(i)
        console.log(space+hash)
    }

}

//test
staircase(6)