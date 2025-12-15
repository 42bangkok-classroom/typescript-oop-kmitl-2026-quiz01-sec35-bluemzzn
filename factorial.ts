let sizeFactorial = Number(process.argv[2]);

if (Number.isNaN(sizeFactorial) || sizeFactorial < 0 || sizeFactorial === undefined) {
    process.stdout.write("Invalid Input");
    process.exit();
}
else{
    let ans = 1;
    for (let i = 2; i <= sizeFactorial; i++) {
        // calculating the factorial
        ans = ans * i;
    }
    console.log(ans);
    
}