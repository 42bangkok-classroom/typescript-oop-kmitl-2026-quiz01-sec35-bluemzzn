let sizeXOCheck = process.argv[2];

// Check if input is empty or undefined
if(!sizeXOCheck || sizeXOCheck.trim() === ""){
    console.log("Invalid Input");
    process.exit();
}

let sizeXO = Number(process.argv[2]);

if (Number.isNaN(sizeXO) || sizeXO <= 0 || sizeXO === undefined) {
    process.stdout.write("Invalid Input");
    process.exit();
} else {
    for (let i = 1; i <= sizeXO; i++) {
        for (let j = 1; j <= sizeXO; j++) {
            if (i === 1 || i === sizeXO || j === 1 || j === sizeXO) {
                process.stdout.write("x");
            } else {
                process.stdout.write("o");
            }
        }
        process.stdout.write("\n");
    }
}