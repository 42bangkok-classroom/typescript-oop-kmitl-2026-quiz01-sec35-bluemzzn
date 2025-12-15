let rowNum = process.argv[2];

// Check if input is empty or undefined
if(!rowNum || rowNum.trim() === ""){
    console.log("Invalid Input");
    process.exit();
}


let rowNumDel = Number(process.argv[2]);

if (Number.isNaN(rowNumDel) || rowNumDel <= 0 || rowNumDel === undefined) {
    process.stdout.write("Invalid Input");
    process.exit();
}

else {
    for (let i = rowNumDel; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            process.stdout.write(String(j));
        }
        process.stdout.write("\n");
    }
}