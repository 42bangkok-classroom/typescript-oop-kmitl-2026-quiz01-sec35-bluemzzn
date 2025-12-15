let sizeSumCheck = process.argv[2];

// Check if input is empty or undefined
if(!sizeSumCheck || sizeSumCheck.trim() === ""){
    console.log("Invalid Input");
    process.exit();
}

let inputSum = Number(process.argv[2]);

if (Number.isNaN(inputSum) || inputSum < 0 || inputSum === undefined) {
    console.log("Invalid Input");
    process.exit();
}
else{
    let sum = 0;
    for(let i = 1; i <= inputSum; i++){
        sum += i;
    }
    console.log(sum);
}